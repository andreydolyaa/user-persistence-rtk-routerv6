import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to={"/devices"}>devices</Link>
      <Link to={"/stats"}>stats</Link>
    </div>
  );
};

export default Home;
