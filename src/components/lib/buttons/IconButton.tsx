import React from "react";

const IconButton: any = ({ icon:Icon, onClick, color }: any) => {
  return (
    <button className="shadow-custom rounded-full p-2 bg-primary_lite flex items-center justify-center" onClick={onClick}>
      <Icon />
    </button>
  );
};

export default IconButton;
