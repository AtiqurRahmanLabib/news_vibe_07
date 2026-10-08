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
    name: string;
    email: string;
    password: string;
  };
  console.log(user);
  const { data, error } = await authClient.signUp.email({
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

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main */}
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
              <span className="text-2xl">📰</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Create Your Account
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Join our news community and stay informed.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <Form
              className="flex w-full flex-col gap-5"
              render={(props) => <form {...props} data-custom="foo" />}
              onSubmit={onSubmit}
            >
              <TextField
                isRequired
                name="name"
                validate={(value) => {
                  if (value.length < 3) {
                    return "Name must be at least 3 characters";
                  }
                  return null;
                }}
              >
                <Label className="mb-2 block text-sm font-semibold text-gray-800">
                  Name
                </Label>
                <Input
                  className="h-12 rounded-lg border border-gray-300 bg-white px-4 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  placeholder="John Doe"
                />
                <FieldError />
              </TextField>
              {/* Email */}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (
                    !/^[A-Z0-9.\_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                  ) {
                    return "Please enter a valid email address";
                  }

                  return null;
                }}
              >
                <Label className="mb-2 block text-sm font-semibold text-gray-800">
                  Email Address
                </Label>

                <Input
                  className="h-12 rounded-lg border border-gray-300 bg-white px-4 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
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
                <Label className="mb-2 block text-sm font-semibold text-gray-800">
                  Password
                </Label>

                <Input
                  className="h-12 rounded-lg border border-gray-300 bg-white px-4 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  placeholder="Enter your password"
                />

                <Description className="mt-2 text-xs text-gray-500">
                  At least 8 characters, 1 uppercase letter and 1 number.
                </Description>

                <FieldError className="mt-1 text-sm text-red-600" />
              </TextField>

              {/* Buttons */}
              <div className="mt-2 flex gap-3">
                <Button
                  type="submit"
                  className="h-12 flex-1 rounded-lg bg-red-600 font-semibold text-white shadow-sm transition hover:bg-red-700"
                >
                  <Check />
                  Create Account
                </Button>

                <Button
                  type="reset"
                  variant="secondary"
                  className="h-12 rounded-lg border border-gray-300 bg-white px-6 font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  Reset
                </Button>
              </div>
            </Form>
          </div>

          {/* Bottom text */}
          <p className="mt-6 text-center text-xs text-gray-400">
            By creating an account, you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
