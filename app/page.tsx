// import { axiosInstance } from "./dataProvider/dataProvider";

//  export  default function Home() {
//   const data = await axiosInstance.get(`/user`);
//   return (
//     <div >
//      hello ui
//      {data?.data}
//     </div>
//   );
// }

"use client";
// import axios from "axios";
import { axiosInstance } from "./dataProvider/dataProvider";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/user`);
        setData(response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on mount

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>; // Show loading state while fetching

  return (
    <div>
      hello ui
      <pre>{JSON.stringify(data, null, 2)}</pre> Render data as JSON
    </div>
  );
}
