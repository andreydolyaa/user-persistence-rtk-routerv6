import { useDispatch } from "react-redux";
import api from "../api/axios";
import { setUser } from "../store/slices/userSlice";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    const response = await api.get("/refresh");
    const user = response.data;
    dispatch(setUser(user));
    return user;
  };

  return refresh;
};

export default useRefreshToken;
