import { ApiEnum } from "../utils/enumUtils";
import { axiosInstance } from "./dataProvider/dataProvider";
import { getUserId } from "./dataProvider/token";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const productCreationApi = async (createData: any) => {
  const { data } = await axiosInstance.post(
    ApiEnum.product,
    { ...createData },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return data;
};

export const getCategories = async () => {
  try {
    const { data } = await axiosInstance.get(ApiEnum.getCategories);
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
export const getProducts = async () => {
  try {
    const { data } = await axiosInstance.get(ApiEnum.product);
    return data;
  } catch (error) {
    console.error("Error fetching Products:", error);
    throw error;
  }
};

export const addCart = async ({
  productId,
  userId,
}: {
  productId: string;
  userId: string;
}) => {
  try {
    const apiRequest = {
      userId,
      products: [{ productId }],
    };
    const { data } = await axiosInstance.post(ApiEnum.cartAdd, apiRequest);
    return data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

export const getCartByUserId = async (userId: string) => {
  try {
    const { data } = await axiosInstance.get(
      `${ApiEnum.getUserCart}/${userId}`,
    );
    return data;
  } catch (error) {
    console.error("Error getting user cart:", error);
    throw error;
  }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RemoveCartById = async (productId: any) => {
  try {
    const userId = getUserId();
    await axiosInstance.delete(`${ApiEnum.removeProduct}/${userId}`, {
      data: { productId },
    });
  } catch (error) {
    console.error("Error getting cart deletion:", error);
    throw error;
  }
};
