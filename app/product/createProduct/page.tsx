// "use client";

// import Dropdown from "@/app/components/formFields/dropDown";
// import useScreenWidth from "@/app/hooks/screenWidth/useScreenWidth";
// import useFormData from "@/app/hooks/useFormData/useFormData";
// import { setSession } from "@/app/services/dataProvider/token";
// import { getCategories, userCreationApi } from "@/app/services/userApiServices";
// import { extractPhoneNumberDetails } from "@/app/utils/utils";
// import InputField from "@/app/components/formFields/inputField";
// import {
//   validateImageFile,
//   validateName,
//   validateNumber,
// } from "@/app/utils/validator";
// import DragAndDrop from "@/app/components/formFields/dragAndDrop";
// import Button from "@/app/components/button/buttonComponent";
// import { initialFormStateOfProductCreation } from "./type";
// import SpecificationComponent from "@/app/components/formFields/specificationComponent";
// import { useEffect, useState } from "react";
// import StringToArrayInput from "@/app/components/formFields/stringToArrayComponent";
// import { axiosInstance } from "@/app/services/dataProvider/dataProvider";
// import DropdownApi from "@/app/components/formFields/dropDownWithApi";
// import { ApiEnum } from "@/app/utils/enumUtils";

// const createProduct = async() => {
//     useEffect(() => {
//         // Fetch categories with axios and handle promise
//         const fun=()=>{

//             console.log( getCategories(),' getCategories()');
//         }
//         fun()
//         // getCategories()
//         //   .then((data) => {
//         //     console.log("Fetched categories:", data);
//         //     // setCategories(data);
//         //   })
//         //   .catch(() => {
//         //      console.log("Failed to load categories.");
//         //   });
//       });
//   const screenWidth = useScreenWidth();

// const [formData, setFormData] = useFormData(initialFormStateOfProductCreation)

//   const { quantity, name, price, highlights, description, specification,category, bankOffer,seller} =
//     formData;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const handleFileSelect = (data: { key: string; files: File } | any) => {
//     setFormData("image", data.files[0]);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const data = {
//         ...formData,
//         phone: extractPhoneNumberDetails(formData),
//       };
//       setSession(userCreationApi(data));
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (err: any) {
//       console.error(err);
//     }
//   };

//   const [specifications, setSpecifications] = useState([
//     { key: "Wireless Charging", value: "Yes" },
//   ]);

//   const handleSpecificationsChange = (updatedSpecs: { key: string; value: string }[]) => {
//     setSpecifications(updatedSpecs);
//   };

//   const [array, setArray] = useState<string[]>([]);
//   const [bankOffers, setBankOffer] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>("");

//   const handleArrayChange = (values: string[]) => {
//     setArray(values);
//     console.log(values); // Logs the updated array
//   };
//   const handleBankOfferChange = (values: string[]) => {
//     setBankOffer(values);
//     console.log(values); // Logs the updated array
//   };

//   const handleCategoryChange = (value: string) => {
//     setSelectedCategory(value);
//     console.log("Selected category ID:", value);
//   };

//   return (

//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//     <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-lg">
//     <h2 className="text-2xl font-bold text-center text-gray-800">
//     Create New Product
//     </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InputField
//               label="Name"
//               type="text"
//               value={name}
//               onChange={(e) => setFormData("name", e.target.value)}
//               validate={validateName}
//               placeholder="Enter your name"
//             />

//             <InputField
//               label="Price"
//               type="text"
//               value={price}
//               onChange={(e) => setFormData("price", e.target.value)}
//               validate={validateNumber}
//               placeholder="Enter price"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//   <InputField
//       label="Quantity"
//       type="text"
//       value={quantity}
//       onChange={(e) => setFormData("quantity", e.target.value)}
//       validate={validateNumber}
//       placeholder="Enter quantity"
//     />
//             {/* <InputField
//               label="Category"
//               type="text"
//               value={category}
//               onChange={(e) => setFormData("category", e.target.value)}
//               validate={validateName}
//               placeholder="Enter category"
//             /> */}
//              {/* <Dropdown
//               label="Category"
//               options={getCategories()}
//               value={categorys.data._id}
//               onChange={(e: string) => setFormData("category", e)}
//             /> */}
//            <DropdownApi
//           endpoint={ApiEnum.getCategories}
//           label="Category"
//           onChange={handleCategoryChange}
//         />

//           </div>

//           <InputField
//               label="Description"
//               type="text"
//               value={description}
//               onChange={(e) => setFormData("description", e.target.value)}
//               validate={validateName}
//               placeholder="Enter description"
//             />
//           {/* <InputField
//               label="Specification"
//               type="text"
//               value={specification}
//               onChange={(e) => setFormData("specification", e.target.value)}
//               validate={validateName}
//               placeholder="Enter specification"
//             /> */}
//               <SpecificationComponent
//         specifications={specifications}
//         onChange={handleSpecificationsChange}
//       />

//         <StringToArrayInput
//           label="Highlights"
//           onChange={handleArrayChange}
//           placeholder="Enter items separated by commas "
//         />

//         <StringToArrayInput
//           label="BankOffer"
//           onChange={handleBankOfferChange}
//           placeholder="Enter items separated by commas "
//         />

//           {/* <InputField
//               label="BankOffer"
//               type="text"
//               value={bankOffer}
//               onChange={(e) => setFormData("bankOffer", e.target.value)}
//               validate={validateName}
//               placeholder="Enter bankOffer"
//             /> */}
//           <DragAndDrop
//             label="Upload Profile Photo"
//             onFileSelect={handleFileSelect}
//             fieldKey="image"
//             isMultiple
//             validateFile={validateImageFile}
//           />

//           <Button
//             name="Create"
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default createProduct;

//..............................................................

"use client";

// import Dropdown from "@/app/components/formFields/dropDown";
// import useScreenWidth from "@/app/hooks/screenWidth/useScreenWidth";
import useFormData from "@/app/hooks/useFormData/useFormData";
// import { setSession } from "@/app/services/dataProvider/token";
// import { userCreationApi } from "@/app/services/userApiServices";
// import { extractPhoneNumberDetails } from "@/app/utils/utils";
import InputField from "@/app/components/formFields/inputField";
import {
  validateImageFile,
  validateName,
  validateNumber,
} from "@/app/utils/validator";
import DragAndDrop from "@/app/components/formFields/dragAndDrop";
import Button from "@/app/components/button/buttonComponent";
import SpecificationComponent from "@/app/components/formFields/specificationComponent";
// import { useEffect, useState } from "react";
import StringToArrayInput from "@/app/components/formFields/stringToArrayComponent";
import DropdownApi from "@/app/components/formFields/dropDownWithApi";
import { ApiEnum } from "@/app/utils/enumUtils";
import { initialFormStateOfProductCreation } from "./type";
import { productCreationApi } from "@/app/services/productAndCategoryApiServices";

const CreateProduct = () => {
  // const screenWidth = useScreenWidth();

  const [formData, setFormData] = useFormData(
    initialFormStateOfProductCreation,
  );
  const { quantity, name, price, description } = formData;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSpecificationsChange = (updatedSpecs: any) =>
    setFormData("specification", updatedSpecs);
  const handleHighlightChange = (values: [{ key: ""; value: "" }]) =>
    setFormData("highlights", values);
  const handleBankOfferChange = (values: string[]) =>
    setFormData("bankOffer", values);
  const handleFileSelect = (data: { files: File[] }) =>
    setFormData("images", data.files);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCategoryChange = (value: any) => setFormData("category", value);

  /* eslint-disable */
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // console.log("Form Data before submission:", formData);

      // Convert formData to FormData if needed for file uploads
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        //   if (key === "images") {
        //     value.forEach((file: File) => formDataToSend.append("images", file));
        //   } else {
        formDataToSend.append(key, JSON.stringify(value));
        //   }
      });

      // console.log(formDataToSend,'submission came');

      const res = productCreationApi(formData);
      console.log(res, "res came");

      //   const data = {
      //     ...formData,
      //     phone: extractPhoneNumberDetails(formData),
      //   };
      //   await setSession(userCreationApi(data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create New Product
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
            <InputField
              label="Price"
              type="text"
              value={price}
              onChange={(e) => setFormData("price", e.target.value)}
              validate={validateNumber}
              placeholder="Enter price"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Quantity"
              type="text"
              value={quantity}
              onChange={(e) => setFormData("quantity", e.target.value)}
              validate={validateNumber}
              placeholder="Enter quantity"
            />
            <DropdownApi
              endpoint={ApiEnum.getCategories}
              label="Category"
              onChange={handleCategoryChange}
            />
          </div>
          <InputField
            label="Description"
            type="text"
            value={description}
            onChange={(e) => setFormData("description", e.target.value)}
            validate={validateName}
            placeholder="Enter description"
          />
          <SpecificationComponent
            specifications={formData.specification}
            onChange={handleSpecificationsChange}
          />
          <StringToArrayInput
            label="Highlights"
            onChange={handleHighlightChange}
            placeholder="Enter items separated by commas"
          />
          <StringToArrayInput
            label="BankOffer"
            onChange={handleBankOfferChange}
            placeholder="Enter items separated by commas"
          />
          <DragAndDrop
            label="Upload Profile Photo"
            onFileSelect={handleFileSelect as any}
            fieldKey="image"
            isMultiple
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
/* eslint-enable */

export default CreateProduct;
