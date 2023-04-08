import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = (URL) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data);
    });
  }, [URL]);

  return data;
};

export default useFetchProducts;
