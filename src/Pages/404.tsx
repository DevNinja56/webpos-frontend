import React from "react";
import Header from "../Components/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="h-screen w-screen grid place-items-center">
        <h1 className="text-black text 3xl">Page Not Found 404</h1>
      </div>
    </>
  );
};

export default NotFound;
