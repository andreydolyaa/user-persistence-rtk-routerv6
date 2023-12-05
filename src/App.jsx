import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { useSelector } from "react-redux";
import useRefreshToken from "./hooks/useRefreshToken";

const App = () => {
  const refresh = useRefreshToken();
  const user = useSelector((state) => state.user.user);

  // TODO: to persist the user this need to be add to the router somehow

  useEffect(() => {
    if (!user?.accessToken) refresh();
  }, [user]);

  return <RouterProvider router={router} />;
};

export default App;
