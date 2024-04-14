// import React, { useEffect } from "react";
// import axios from "axios";

// const AxiosAPI = () => {
//   const url = "http://127.0.0.1:8000/api/show/";
//   let data = "";
//   const getData = async (url) => {
//     try {
//       const res = await axios.get(url);
//       data = res;
//       console.log(res);
//     } catch (error) {
//       // console.error("Error fetching products:", error);
//       console.error("Error fetching products:", error);
//     }
//   };
//   useEffect(() => {
//     getData(url);
//   }, []);
//   return <div>{data}</div>;
// };

// export default AxiosAPI;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useConditionContext } from "../store/ConditionContext";
import { useMainContext } from "../store/MainContext";

const AxiosAPI = () => {
  const {url} = useMainContext();
  const [data, setData] = useState([]);
  const { isFetching } = useConditionContext();
  const getData = async (url) => {
    try {
      const res = await axios.get(
        `${url}show/`
      );
      setData(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  console.log(isFetching);
  useEffect(() => {
    getData(url);
  }, [isFetching]);

  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item._id}>
              `{item.first_name} , {item.last_name}`
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AxiosAPI;
