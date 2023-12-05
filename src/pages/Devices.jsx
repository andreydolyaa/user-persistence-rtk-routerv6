import React, { useEffect, useState } from "react";
import { apiCallWithToken } from "../api/axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Devices = () => {
  const user = useSelector((state) => state.user.user);
  const [devices, setDevices] = useState([]);

  const getDevices = async () => {
    const response = await apiCallWithToken(
      "/products",
      "get",
      null,
      user.accessToken
    );
    setDevices(response.data);
  };

  useEffect(() => {
    getDevices();
  }, []);

  return (
    <div>
      Devices
      {devices.length > 0 &&
        devices.map((d) => {
          return <div key={d._id}>{d.name}</div>;
        })}
      <Link to="/home">return </Link>
    </div>
  );
};

export default Devices;
