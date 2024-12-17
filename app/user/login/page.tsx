"use client";
/* eslint-disable */

import Link from "next/link";
import useFormData from "@/app/hooks/useFormData/useFormData";
import { setSession } from "@/app/services/dataProvider/token";
import { userLogin } from "@/app/services/userApiServices";
import EmailField from "@/app/components/formFields/emailComponent";
import { validateEmail, validatePassword } from "@/app/utils/validator";
import PasswordField from "@/app/components/formFields/passwordField";
import Button from "@/app/components/button/buttonComponent";

const LoginPage = () => {
  const [formData, setFormData] = useFormData({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSession(userLogin(formData));
      // setData(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {}
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <EmailField
            value={formData.email}
            onChange={(e) => setFormData("email", e.target.value)}
            validateEmail={validateEmail}
          />
          <PasswordField
            value={formData.password}
            onChange={(e: string) => setFormData("password", e)}
            validatePassword={validatePassword}
          />
          <div className="p-4"></div>
          <Button
            name="Login"
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
          />
        </form>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link className="text-blue-500 hover:underline" href="createUser">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
