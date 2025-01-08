// "use client";

import { useEffect, useState } from "react";
import { getProducts } from "../services/productAndCategoryApiServices";
import ProductCard from "../components/card/productCard";
import { CarouselHeader } from "../components/card/header";
// import <CarouselHeader></CarouselHeader> from "../components/card/header";

// const bgImg='https://res.cloudinary.com/dx7bdbfjt/image/upload/v1734681657/DALL_E_2024-12-20_13.29.09_-_A_visually_stunning_banner_for_an_e-commerce_website_featuring_electronic_gadgets._The_scene_includes_modern_gadgets_like_smartphones_smartwatches_l_zy8cbc.webp'
// let bgImg='https://res.cloudinary.com/dx7bdbfjt/image/upload/v1734687749/DALL_E_2024-12-20_15.12.09_-_A_visually_striking_e-commerce_website_banner_featuring_high-tech_gadgets_such_as_laptops_smartphones_smartwatches_tablets_and_headphones._Ensure_q7lvoo.webp'

// export default function IndexPage({
//     products,
//     mainMenu,
//     footerMenu,
//     basicSettings,
//   }: any) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         {/* Background Section */}
//         <header
//           className="relative h-screen bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${bgImg})`,
//             backgroundAttachment: 'fixed',
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
//             <p className="text-lg font-light">Muhammad Ali</p>
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">Impossible is nothing!</h1>
//             <p className="text-sm md:text-lg max-w-2xl">
//               Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It’s a dare. Impossible is
//               potential. Impossible is temporary.
//             </p>
//             <a
//               href="https://google.com"
//               className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
//             >
//               Learn More
//             </a>
//           </div>
//         </header>

//         {/* Content Section */}
//         <main className="relative z-10 bg-gray-50">
//           <div className="container mx-auto px-4 py-10">
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">Boundless Store</h1>
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {dummyProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white"
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold">{product.name}</h3>
//                     <p className="text-gray-800 font-bold mt-2">${product.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Products Carousel</h2>
//             <div className="flex space-x-4 overflow-x-auto">
//               {dummyProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="flex-none w-64 border border-gray-200 rounded-lg shadow-sm bg-white"
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold">{product.name}</h3>
//                     <p className="text-gray-800 font-bold mt-2">${product.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </main>
//       </div>
//     );
//   }

//.................................................................................................................

// export default function IndexPage({
//     // products,
//     mainMenu,
//     footerMenu,
//     basicSettings,
//   }: any) {
//     const[product,setProduct]=useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             getProducts().then((data)=>{
//                 setProduct(data);
//             })
//         };

//         fetchData();
//       }, []);

//     return (
//       <div className="min-h-screen bg-transparent ">

//         <CarouselHeader interval={5000} />
//              {/* Content Section */}
//         <main className="relative z-10 bg-transparent backdrop-blur-lg">
//          <div className="container mx-auto px-4 py-10 relative">
// {/* product card section */}
//             <div className="absolute inset-0 bg-transparent bg-opacity-0 backdrop-blur-lg -z-10"></div>

//             <h1 className="text-3xl font-bold text-gray-800 mb-6">
//             Boundless Store
//             </h1>
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {product?.map((product: any) => (
//                 <ProductCard key={product._id} product={product} />
//             ))}
//             </div>

//             <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
//               Products Carousel
//             </h2>
//           </div>
//         </main>
//       </div>
//     );
//   }

/* eslint-disable */

export default function IndexPage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProduct(data);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Carousel Header */}
      <CarouselHeader interval={5000} />

      {/* Content Section */}
      <main className="relative z-10">
        <div className="pt-[100vh] container mx-auto px-4 py-10">
          {/* Product Card Section */}
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Boundless Store
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product?.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            Products Carousel
          </h2>
          {/* <div className="flex space-x-4 overflow-x-auto">
              {dummyProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-none w-64 border border-gray-200 rounded-lg shadow-sm bg-white"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-800 font-bold mt-2">${product.price}</p>
                  </div>
                </div>
              ))}
            </div> */}
        </div>
      </main>
    </div>
  );
}
// //.................................

{
  /* <div className="flex space-x-4 overflow-x-auto">
              {product?.map((data:any) => (
                <div
                  key={data._id}
                  className="flex-none w-64 border border-gray-200 rounded-lg shadow-sm bg-white"
                >
                  <img
                    src={data.image[0]}
                    alt={data.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{data.name}</h3>
                    <p className="text-gray-800 font-bold mt-2">${data.price}</p>
                  </div>
                </div>
              ))}
            </div> */
}

/* eslint-enable */
