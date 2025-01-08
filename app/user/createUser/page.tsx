"use client";

import Dropdown from "@/app/components/formFields/dropDown";
import useScreenWidth from "@/app/hooks/screenWidth/useScreenWidth";
import useFormData from "@/app/hooks/useFormData/useFormData";
import { setSession } from "@/app/services/dataProvider/token";
import { userCreationApi } from "@/app/services/userApiServices";
import { extractPhoneNumberDetails } from "@/app/utils/utils";
import { Roles } from "@/app/utils/enumUtils";
import InputField from "@/app/components/formFields/inputField";
import {
  validateEmail,
  validateImageFile,
  validateName,
  validatePassword,
  validatePhoneNumber,
} from "@/app/utils/validator";
import EmailField from "@/app/components/formFields/emailComponent";
import PasswordField from "@/app/components/formFields/passwordField";
import PhoneField from "@/app/components/formFields/PhoneField";
import DragAndDrop from "@/app/components/formFields/dragAndDrop";
import Button from "@/app/components/button/buttonComponent";

const createUser = () => {
  const screenWidth = useScreenWidth();

  const [formData, setFormData] = useFormData({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    role: "",
    contactNumber: { countryCode: "", phoneNumber: "" },
    image: null as { key: string; file: File } | null,
  });

  const { email, name, password, confirmPassword, role, contactNumber } =
    formData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileSelect = (data: { key: string; files: File } | any) => {
    setFormData("image", data.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = {
        ...formData,
        phone: extractPhoneNumberDetails(formData),
      };
      setSession(userCreationApi(data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create User
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setFormData("name", e.target.value)}
              validate={validateName}
              placeholder="Enter your name"
            />
            <EmailField
              value={email}
              onChange={(e) => setFormData("email", e.target.value)}
              validateEmail={validateEmail}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PasswordField
              required
              value={password}
              onChange={(e: string) => setFormData("password", e)}
              validatePassword={validatePassword}
            />

            <PasswordField
              passwordName="Confirm Password"
              value={confirmPassword}
              onChange={(e: string) => setFormData("confirmPassword", e)}
              validatePassword={validatePassword}
              required
              placeholder="Enter Confirm Password"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Dropdown
              label="Role"
              options={Roles}
              value={role}
              onChange={(e: string) => setFormData("role", e)}
            />
            <PhoneField
              value={contactNumber}
              inputStyle={{
                width: screenWidth < 768 ? "450px" : "220px",
              }}
              onChange={(value) => setFormData("contactNumber", value)}
              validatePhoneNumber={validatePhoneNumber}
            />
          </div>

          <DragAndDrop
            label="Upload Profile Photo"
            onFileSelect={handleFileSelect}
            fieldKey="image"
            validateFile={validateImageFile}
          />

          <Button
            name="Create"
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
          />
        </form>
      </div>
    </div>
  );
};

export default createUser;
