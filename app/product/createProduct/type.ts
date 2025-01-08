import { File } from "buffer";
export const initialFormStateOfProductCreation = {
  name: "",
  seller: "",
  quantity: 0,
  price: 0,
  highlights: [""],
  description: "",
  specification: [{ key: "", value: "" }],
  images: [] as File[],
  category: "",
  bankOffer: [""],
};
