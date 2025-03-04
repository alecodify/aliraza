import React from "react";

function MobileAppCard({ imgPath, title, description, apkLink }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105 hover:shadow-xl shadow-green-500 hover:shadow-green-600">
       <img
        src={imgPath}
        alt="project-img"
        className="w-full h-64 object-cover transition-all duration-300 hover:opacity-80"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 uppercase">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="mt-4 flex justify-center space-x-4">
            <a
                href={apkLink}
                download
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
                Download APK
            </a>
        </div>
       
      </div>
     
    </div>
  );
}

export default MobileAppCard;