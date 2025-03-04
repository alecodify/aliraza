import React from "react";

const Preloader = ({ load }) => {
  return <div className={load === "preloader" ? "h-full w-full justify-center items-center" : ""} id={load ? "preloader" : "preloader-none"}/>
};

export default Preloader;
