"use client";

import { Check } from "@gravity-ui/icons";
import { toast } from "sonner";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "../lib/auth-client";

const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const user = Object.fromEntries(formData.entries()) as {
    email: string;
    password: string;
  };

  console.log(user);

  const { data, error } = await authClient.signIn.email({
    ...user,
    callbackURL: "/",
  });

  if (data) {
    console.log(data);
    toast.success("Account created successfully!");
  }

  if (error) {
    console.log(error);
    toast.error(error.message);
  }
};

const GoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data);
};

const githubSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
  });
  console.log(data);
};

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center">
        {/* News Brand */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 shadow-lg shadow-red-600/20">
            <span className="text-3xl">📰</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            News Vibe 07
          </h1>

          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-red-600" />

          <p className="mt-4 text-sm leading-6 text-gray-500">
            Sign in to stay connected with the latest news, stories and updates.
          </p>
        </div>

        {/* Sign In Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:p-8">
          {/* Card Header */}
          <div className="mb-7">
            <h2 className="text-xl font-bold text-gray-900">Welcome Back</h2>

            <p className="mt-1 text-sm text-gray-500">
              Sign in to your account to continue.
            </p>
          </div>

          <Form
            className="flex w-full flex-col gap-5"
            render={(props) => <form {...props} data-custom="foo" />}
            onSubmit={onSubmit}
          >
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="mb-2 block text-sm font-semibold text-gray-800">
                Email Address
              </Label>

              <Input
                className="h-12 rounded-xl border border-gray-300 bg-gray-50 px-4 text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-50"
                placeholder="john@example.com"
              />

              <FieldError className="mt-1 text-sm text-red-600" />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <div className="flex items-center justify-between">
                <Label className="mb-2 block text-sm font-semibold text-gray-800">
                  Password
                </Label>

                <button
                  type="button"
                  className="text-xs font-medium text-red-600 transition hover:text-red-700"
                >
                  Forgot password?
                </button>
              </div>

              <Input
                className="h-12 rounded-xl border border-gray-300 bg-gray-50 px-4 text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-50"
                placeholder="Enter your password"
              />

              <Description className="mt-2 text-xs text-gray-400">
                At least 8 characters, 1 uppercase letter and 1 number.
              </Description>

              <FieldError className="mt-1 text-sm text-red-600" />
            </TextField>

            {/* Buttons */}
            <div className="mt-3 flex gap-3">
              <Button
                type="submit"
                className="h-12 flex-1 rounded-xl bg-red-600 font-semibold text-white shadow-md shadow-red-600/20 transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25"
              >
                <Check />
                Sign In
              </Button>

              <Button
                type="reset"
                variant="secondary"
                className="h-12 rounded-xl border border-gray-300 bg-white px-6 font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
              >
                Reset
              </Button>
            </div>
          </Form>
          <button
            type="button"
            onClick={GoogleSignIn}
            className="w-full rounded-xl mt-5 border border-gray-300 bg-white py-3 font-semibold text-gray-700 hover:bg-gray-50"
          >
            Sign in with Google
          </button>
          <button
            type="button"
            onClick={githubSignIn}
            className="w-full rounded-xl mt-5 border border-gray-300 bg-white py-3 font-semibold text-gray-700 hover:bg-gray-50"
          >
            Sign in with Github
          </button>
          {/* Divider */}
          <div className="my-7 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-400">SECURE LOGIN</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <p className="text-center text-xs leading-5 text-gray-400">
            Your account helps us provide you with a better personalized news
            experience.
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          © 2026 News Vibe 07. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
