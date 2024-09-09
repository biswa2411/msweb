import React from 'react';


const WaveBg = ({ fillColor = '#b88e2f', className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className={className}
        >
            <path
                fill={fillColor}
                fillOpacity="1"
                d="M0,64L30,53.3C60,43,120,21,180,21.3C240,21,300,43,360,85.3C420,128,480,192,540,202.7C600,213,660,171,720,144C780,117,840,107,900,106.7C960,107,1020,117,1080,133.3C1140,149,1200,171,1260,149.3C1320,128,1380,64,1410,32L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            />
        </svg>
    );
};


export default WaveBg;