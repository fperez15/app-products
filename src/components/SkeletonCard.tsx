import React from "react";

const SkeletonCard = () => {
  return (
    <div className="group relative bg-white rounded-lg shadow-md p-4 animate-pulse">
      <div className="aspect-square w-full rounded-md bg-gray-300 group-hover:opacity-75 lg:h-80"></div>

      <div className="mt-4 flex justify-between">
        <div>
          <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
          <div className="h-3 w-28 bg-gray-300 rounded"></div>
        </div>
        <div className="h-4 w-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;