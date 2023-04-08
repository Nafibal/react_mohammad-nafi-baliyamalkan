import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useNotLoggedIn = (isLoggedIn) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);
};

export default useNotLoggedIn;
