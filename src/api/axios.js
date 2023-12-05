import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:5005",
  withCredentials: true,
});

export const attachToken = (token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

const refreshToken = async () => {
  const response = await instance.get("/refresh");
  const token = response?.data?.accessToken;
  attachToken(token);
  return token;
};

export const apiCallWithToken = async (
  url,
  method = "get",
  data = null,
  accessToken
) => {
  attachToken(accessToken);

  try {
    const response = await instance({ method, url, data });
    return response;
  } catch (error) {
    if (error?.response && error?.response?.status === 401) {
      const newToken = await refreshToken();
      return apiCallWithToken(url, method, data, newToken);
    } else {
      throw error;
    }
  }
};

export default instance;
