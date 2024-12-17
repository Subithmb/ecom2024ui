import { ApiEnum } from "../utils/enumUtils";
import { axiosInstance } from "./dataProvider/dataProvider";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const userCreationApi = async (data: any) => {
  const response = await axiosInstance.post(
    ApiEnum.createUser,
    { ...data },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};
export const userLogin = async (data: { email: string; password: string }) => {
  const response = await axiosInstance.post(ApiEnum.loginUser, {
    ...data,
  });
  return response.data;
};
