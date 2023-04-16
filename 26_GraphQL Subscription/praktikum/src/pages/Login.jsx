import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/loginSlice";
import useLoggedIn from "../hooks/useLoggedIn";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  useLoggedIn(isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (
      users.find(
        (user) => user.username == username && user.password == password
      )
    ) {
      alert("berhasil login");
      dispatch(loginUser());
      navigate("/");
      return;
    }
    alert("Username dan Password masih salah");
  };

  return (
    <>
      <h1 className="text-center mt-5 mb-5">LOGIN</h1>
      <form className="mt-5 w-50 container" onSubmit={handleOnSubmit}>
        {/* Email input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            ref={usernameRef}
            type="Username"
            id="username"
            name="username"
            className="form-control"
          />
        </div>
        {/* Password input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
