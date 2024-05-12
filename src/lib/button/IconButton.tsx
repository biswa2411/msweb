import React from "react";

interface IconButtonProps {
  icon: React.ComponentType;  // Consider using React.ComponentType<{}> if the icon should not receive any props
  onClick?: React.MouseEventHandler<HTMLButtonElement>;  // More specific type for onClick event
}

const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, onClick }) => {
  return (
    <button className="shadow-custom rounded-full p-2 bg-primary_lite flex items-center justify-center" onClick={onClick}>
      <Icon />
    </button>
  );
};

export default IconButton;
