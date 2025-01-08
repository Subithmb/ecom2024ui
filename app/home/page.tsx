import React from "react";
import Navbar from "./navBar";
import HomeP from "./home";

const HomePage = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50  shadow-md m">
        <Navbar />
      </div>
      <div className="container mx-auto">
        {/* Main Content */}
        <HomeP />
      </div>
    </div>
  );
};

export default HomePage;

// "use client";
// import { useEffect, useState } from "react";
// import { axiosInstance } from "../dataProvider/dataProvider";

// export default function HomePage() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axiosInstance.get(`/user`);
//         setData(response.data);
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       } catch (err: any) {
//         setError(err.message);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this runs once on mount

//   if (error) return <div>Error: {error}</div>;
//   if (!data) return <div>Loading...</div>; // Show loading state while fetching

//   return (
//     <div>
//       hello ui
//       <pre>{JSON.stringify(data, null, 2)}</pre> Render data as JSON
//     </div>
//   );
// }
