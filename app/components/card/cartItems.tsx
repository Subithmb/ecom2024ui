"use client";
import { getUserId } from "@/app/services/dataProvider/token";
import { getCartByUserId } from "@/app/services/productAndCategoryApiServices";
import { ApiEnum } from "@/app/utils/enumUtils";
import CartResponseType from "@/app/utils/type";
import React, { useEffect, useState } from "react";

function CartItems() {
  const [data, setData] = useState<CartResponseType>();

  //   const handleIncrease = () => setQuantity(quantity + 1);
  //   const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);
  //   const removeCartItem = (productId:string) =>{
  //     RemoveCartById(productId)
  //   }
  useEffect(() => {
    const userId = getUserId();
    if (!userId) {
      window.location.href = ApiEnum.loginUser;
      return;
    }
    const featchdata = async (userId: string) => {
      const { data } = await getCartByUserId(userId);
      setData(data);
    };
    featchdata(userId);
  }, []);
  return (
    <>
      {data ? (
        data?.products?.map((product) => {
          <ul>
            <li className="sm:flex items-center py-6 border-b border-gray-200 dark:border-gray-700/60">
              <a
                className="block mb-4 sm:mb-0 mr-5 md:w-32 xl:w-auto shrink-0"
                href="#0"
              >
                {/* <img className="rounded-sm" src={product?.productId?.images[0]} width="200" height="142" alt="Product 01" /> */}
              </a>
              <div className="grow">
                <a href="#0">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                    {product?.productId?.name}
                  </h3>
                </a>
                <div className="text-sm mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </div>
                {/* Product meta */}
                <div className="flex flex-wrap justify-between items-center">
                  {/* Rating and price */}
                  <div className="flex flex-wrap items-center space-x-2 mr-2">
                    {/* Quantity */}
                    <div>
                      <div className="inline-flex text-sm font-medium bg-yellow-500/20 text-green-700 rounded-full text-center px-2 py-0.5">
                        01
                      </div>
                    </div>
                    {/* Price */}
                    <div>
                      <div className="inline-flex text-sm font-medium bg-green-500/20 text-green-700 rounded-full text-center px-2 py-0.5">
                        $89.00
                      </div>
                    </div>
                  </div>
                  <button className="text-sm underline hover:no-underline">
                    Remove
                  </button>
                </div>
              </div>
            </li>
          </ul>;
        })
      ) : (
        <></>
      )}

      <div className="mt-6">
        <a
          className="text-sm font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
          href="#0"
        >
          &lt;- Back To Shopping
        </a>
      </div>
    </>
  );
}

export default CartItems;
