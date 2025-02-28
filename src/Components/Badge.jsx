import React from "react";

function Badge({ color, name, img }) {
  return (
    <div className={`${color} text-white flex w-max p-1 rounded-md text-xs justify-center mb-1`}>
      <div className="p-1">
        <img src={img} alt={name} className="w-4 h-4" />
      </div>
      <div className="flex flex-col justify-center pr-1">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Badge