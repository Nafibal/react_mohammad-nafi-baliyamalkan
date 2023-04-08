import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLoggedIn = (isLoggedIn) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);
};

export default useLoggedIn;
