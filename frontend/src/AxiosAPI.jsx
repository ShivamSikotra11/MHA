import React, { useEffect } from "react";
import axios from "axios";

const AxiosAPI = () => {
  const url = "http://127.0.0.1:8000/api/show/";
  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    getData(url)
  }, []);
  return <div>AxiosAPI</div>;
};

export default AxiosAPI;
