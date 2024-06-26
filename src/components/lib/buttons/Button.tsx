import React, { FC, MouseEvent } from 'react';

interface NormalButtonProps {
    label?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    active?: boolean;
    isDisable?: boolean;
}

const Button: FC<NormalButtonProps> = ({ label = '', active = false, onClick, isDisable = false }) => {

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (onClick && !isDisable) {
            onClick(event);
        }
    };

    return (
        <button
            className={`w-full h-full rounded-[40px] ${active ? 'bg-ms_white' : 'text-ms_white'}`}
            onClick={handleClick}
            disabled={isDisable} // If the button should be disabled, add this attribute
        >
            {label}
        </button>
    );
}

export default Button;
