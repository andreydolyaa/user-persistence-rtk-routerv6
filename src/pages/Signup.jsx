import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../store/slices/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleValue = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(userData));
    setUserData({ name: "", email: "", password: "" });
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleValue}
          value={userData.name}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleValue}
          value={userData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleValue}
          value={userData.password}
        />
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
