// import { getUserId } from "@/app/services/dataProvider/token";
// import { getCartByUserId, RemoveCartById } from "@/app/services/productAndCategoryApiServices";
// import { ApiEnum } from "@/app/utils/enumUtils";
// import React, { useEffect, useState } from "react";
// import Button from "../button/buttonComponent";
// import CartResponseType from "@/app/utils/type";
// import PaymentPage from "@/app/services/stripe/payment";
// // import CartResponseType from "../../utils/type"

// const CartComponent = ({ onClose }:any) => {
//   const [quantity, setQuantity] = useState(2);
//   const [data, setData] = useState<CartResponseType>( );

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);
//   const removeCartItem = (productId:string) =>{
//     RemoveCartById(productId)
//   }
//   useEffect(()=>{
//     const userId = getUserId();
//     if (!userId) {
//         window.location.href = ApiEnum.loginUser;
//       return;
//     }
//     const featchdata=async(userId:string)=>{
//       const {data}= await getCartByUserId(userId)
//       setData(data)
//     }
//    featchdata(userId)
//   },[])
// console.log(data,'datadata');

//   const pricePerItem = 7.0;
//   const totalPrice = (pricePerItem * quantity).toFixed(2);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 mt-96">
//       <div className="bg-white p-6 rounded shadow-md w-[98%] max-w-5xl min-h-[300px] flex flex-col relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-semibold text-center mb-4">Shopping Cart</h2>

//             {data?data?.products?.map((product: any) => (
//               <>
//                  <div className="flex items-center border-b pb-4">
//                <img
//                  src={product.productId.images[0]}
//                  alt={product.productId.name}
//                  className="w-16 h-16 object-cover mr-4"
//                />
//                <div className="flex-1">
//                  <a href="#" className="text-blue-500 underline">
//                   {product.productId.name}
//                  </a>
//                </div>
//                <div>
//                  <p className="text-sm text-gray-600">₹{product.productId.price}</p>
//                </div>
//              </div>

//              <div className="flex items-center mt-4">
//                <div className="flex items-center">
//                  <button
//                    onClick={handleDecrease}
//                    className="w-8 h-8 bg-gray-200 text-gray-600 font-bold rounded hover:bg-gray-300"
//                  >
//                    -
//                  </button>
//                  <input
//                    type="text"
//                    readOnly
//                    value={product.quantity}
//                    className="w-10 text-center mx-2 border rounded"
//                  />
//                  <button
//                    onClick={handleIncrease}
//                    className="w-8 h-8 bg-gray-200 text-gray-600 font-bold rounded hover:bg-gray-300"
//                  >
//                    +
//                  </button>
//                </div>
//                <Button
//                   type="button"
//                   key={product._id}
//                   onClick={() => removeCartItem(product.productId._id)}
//                   name="Remove"
//                   className="ml-4 bg-black text-red-500 hover:underline"
//                 />
//              </div>
//              </>
//        ) ):<></>}

//         {/* Order Total */}
//         <div className="flex justify-between items-center mt-6">
//           <p className="font-semibold">Order Total:</p>
//           <p className="font-semibold">${totalPrice}</p>
//         </div>

//         {/* Checkout Button */}
//         <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
//           Proceed to checkout
//         </button>
//       </div>
//       <Button
//                   type="button"
//                   onClick={() => <PaymentPage/>}
//                   name="Pay"
//                   className="ml-4 bg-black text-red-500 hover:underline"
//                 />
//                  <PaymentPage/>
//     </div>
//   );
// };

// export default CartComponent;

import React from "react";
import CartItems from "./cartItems";

// import Sidebar from '../../partials/Sidebar';
// import Header from '../../partials/Header';
// import CartItems from '../../partials/ecommerce/CartItems';

function CartComponent() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] overflow-hidden bg-blue-400">
      {/* Sidebar */}
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
            {/* Page content */}
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
              {/* Cart items */}
              <div className="mb-6 lg:mb-0">
                <div className="mb-3">
                  {/* <div className="flex text-sm font-medium text-gray-400 dark:text-gray-500 space-x-2">
                    <span className="text-violet-500">Review</span>
                    <span>-&gt;</span>
                    <span className="text-gray-500 dark:text-gray-400">Payment</span>
                    <span>-&gt;</span>
                    <span className="text-gray-500 dark:text-gray-400">Confirm</span>
                  </div> */}
                </div>
                <header className="mb-2">
                  {/* Title */}
                  <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                    Shopping Cart (3)
                  </h1>
                </header>

                {/* Cart items */}
                <CartItems />
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-white dark:bg-gray-800 p-5 shadow-sm rounded-xl lg:w-72 xl:w-80">
                  <div className="text-gray-800 dark:text-gray-100 font-semibold mb-2">
                    Order Summary
                  </div>
                  {/* Order details */}
                  <ul className="mb-4">
                    <li className="text-sm w-full flex justify-between py-3 border-b border-gray-200 dark:border-gray-700/60">
                      <div>Products & Subscriptions</div>
                      <div className="font-medium text-gray-800 dark:text-gray-100">
                        $205
                      </div>
                    </li>
                    <li className="text-sm w-full flex justify-between py-3 border-b border-gray-200 dark:border-gray-700/60">
                      <div>Shipping</div>
                      <div className="font-medium text-gray-800 dark:text-gray-100">
                        -
                      </div>
                    </li>
                    <li className="text-sm w-full flex justify-between py-3 border-b border-gray-200 dark:border-gray-700/60">
                      <div>Taxes</div>
                      <div className="font-medium text-gray-800 dark:text-gray-100">
                        $48
                      </div>
                    </li>
                    <li className="text-sm w-full flex justify-between py-3 border-b border-gray-200 dark:border-gray-700/60">
                      <div>Total due (including taxes)</div>
                      <div className="font-medium text-green-600">$253</div>
                    </li>
                  </ul>
                  {/* Promo box */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="promo"
                      >
                        Promo Code
                      </label>
                      <div className="text-sm text-gray-400 dark:text-gray-500 italic">
                        optional{" "}
                      </div>
                    </div>
                    <input
                      id="promo"
                      className="form-input w-full mb-2"
                      type="text"
                    />
                    <button
                      className="btn w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white disabled:border-gray-200 dark:disabled:border-gray-700 disabled:bg-white dark:disabled:bg-gray-800 disabled:text-gray-300 dark:disabled:text-gray-600 disabled:cursor-not-allowed"
                      disabled
                    >
                      Apply Code
                    </button>
                  </div>
                  <div className="mb-4">
                    <button className="btn w-full bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                      Buy Now - $253.00
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 italic text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do{" "}
                    <a className="underline hover:no-underline" href="#0">
                      Terms
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CartComponent;
