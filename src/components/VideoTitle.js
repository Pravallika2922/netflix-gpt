import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video py-36 px-12 absolute z-30 text-white bg-gradient-to-r  from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="py-4">
        <button className="bg-gray-500 text-white p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          ▶Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
