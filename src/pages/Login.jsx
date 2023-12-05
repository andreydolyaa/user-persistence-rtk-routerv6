import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slices/userSlice";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const { loading, error } = useSelector((state) => state.user);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user?.accessToken) {
      navigate("/home");
    }
  }, [user]);

  const handleValue = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
    setUserData({ email: "", password: "" });
  };
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
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
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
