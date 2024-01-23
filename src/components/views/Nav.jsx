import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Nav = () => {
  const location = useLocation();
  return (
    <div className="h-[20vh] w-full bg-sec rounded-b-2xl flex flex-col justify-between p-5">
      notification bar
    </div>
  );
};

export default Nav;
