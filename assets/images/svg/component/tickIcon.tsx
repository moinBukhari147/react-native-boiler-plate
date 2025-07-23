import React from 'react';
import Svg, { Path } from 'react-native-svg';

const TickIcon = ({ size = 24, color = '#E7E7E7' }) => (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M21 7.00003L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59003L21 7.00003Z"
            fill={color}
        />
    </Svg>
);

export default TickIcon;
