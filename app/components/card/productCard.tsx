import React from "react";
// import Button from "../button/buttonComponent";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { getUserId } from "@/app/services/dataProvider/token";
import { addCart } from "@/app/services/productAndCategoryApiServices";
import { ApiEnum } from "@/app/utils/enumUtils";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    price: number;
    images: string[];
  };
}
/* eslint-disable */

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleClick = (data: string) => {
    console.log(data, "data cmeee");
  };

  const handleAddToCart = async (data: string) => {
    const userId = getUserId();
    if (!userId) {
      window.location.href = ApiEnum.loginUser;
      return;
    }

    const cartData = { productId: data, userId };
    try {
      const response = await addCart(cartData);
      console.log("Cart item added successfully:", response);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  const handleWishlistItem = (data: string) => {
    console.log(data, "handleCartItem cmeee");
  };
  /* eslint-enable */

  return (
    <div
      // onClick={() => handleClick(product._id)}
      className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white transform transition-transform duration-300 hover:scale-105"
    >
      <img
        onClick={() => handleClick(product._id)}
        src={product.images[0]}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3
          onClick={() => handleClick(product._id)}
          className="text-lg font-semibold"
        >
          {product.name}
        </h3>
        {/* Flex container for price and icons */}
        <div className="flex justify-between items-center mt-2">
          {/* Price on the left */}
          <p className="text-gray-800 font-bold">${product.price}</p>

          {/* Icons on the right */}
          <div className="flex space-x-3">
            <FaRegHeart
              onClick={() => handleWishlistItem(product._id)}
              size={20}
              className="text-gray-600"
            />
            <AiOutlineShoppingCart
              onClick={() => handleAddToCart(product._id)}
              size={20}
              className="text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
