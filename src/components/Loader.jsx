import React from "react";
import loaderGif from "../assets/images/loader.gif";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-50 h-50 relative bg-gray-200 rounded-full overflow-hidden">
        <img
          src={loaderGif}
          className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default Loader;
