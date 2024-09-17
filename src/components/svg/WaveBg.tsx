import React from 'react';

const WaveBg = ({ className = '' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className={className}
        >
            <defs>
                {/* <linearGradient id="golden-gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#FFB14E" />
                </linearGradient>
 */}
                <linearGradient id="golden-gradient" gradientTransform="rotate(55)">
                <stop  offset="0" stopColor="#E09D18"/>
			<stop  offset="0.2" stopColor="#F9C924"/>
			<stop  offset="0.4198" stopColor="#E4AF18"/>
			<stop  offset="0.7802" stopColor="#FFD440"/>
			<stop  offset="1" stopColor="#FFF98C"/>
                </linearGradient>
            </defs>
            <path
                fill="url(#golden-gradient)"
                fillOpacity="1"
                d="M0,64L30,53.3C60,43,120,21,180,21.3C240,21,300,43,360,85.3C420,128,480,192,540,202.7C600,213,660,171,720,144C780,117,840,107,900,106.7C960,107,1020,117,1080,133.3C1140,149,1200,171,1260,149.3C1320,128,1380,64,1410,32L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            />
        </svg>
    );
};

export default WaveBg;
