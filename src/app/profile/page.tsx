"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "../lib/auth-client";
import { Check } from "@gravity-ui/icons";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
    };

    const updateUser = await authClient.updateUser({
      ...user,
    });

    console.log(updateUser);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto w-full max-w-2xl">
        {/* Profile Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-600 text-3xl font-bold text-white shadow-lg shadow-red-600/20">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-900">
            {user?.name || "User Profile"}
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your profile information
          </p>

          <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-red-600" />
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          {/* Card Header */}
          <div className="border-b border-gray-100 px-6 py-5 sm:px-8">
            <h2 className="text-lg font-bold text-gray-900">
              Profile Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Update your name and keep your profile information up to date.
            </p>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-8">
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
                  Full Name
                </Label>

                <Input
                  className="h-12 rounded-xl border border-gray-300 bg-gray-50 px-4 text-gray-900 placeholder:text-gray-400 outline-none transition-all focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-50"
                  placeholder="John Doe"
                />

                <FieldError className="mt-1 text-sm text-red-600" />
              </TextField>

              <Button
                type="submit"
                className="mt-2 h-12 w-full rounded-xl bg-red-600 font-semibold text-white shadow-md shadow-red-600/20 transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/25"
              >
                <Check />
                Update Username
              </Button>
            </Form>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 rounded-xl border border-red-100 bg-red-50 px-5 py-4 text-center">
          <p className="text-sm text-red-700">
            Keep your profile information accurate and up to date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
