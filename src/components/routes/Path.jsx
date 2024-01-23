import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Home from "../Pages/Home";
import Frontend from "../Pages/Frontend";
import Backend from "../Pages/Backend";
import Fullstack from "../Pages/Fullstack";

const Path = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/frontend",
      element: <Frontend />,
    },
    {
      path: "/backend",
      element: <Backend />,
    },
    {
      path: "/full-stack",
      element: <Fullstack />,
    },
  ];
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
};

export default Path;
