import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PickerIcon = ({ color = '#FCFCFC', size = 24, rotate = 0 }) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: [{ rotate: `${rotate}deg` }] }}
        >
            <Path
                d="M6 10.02L12 16.02L18 10.02L16.59 8.60999L12 13.19L7.41 8.60999L6 10.02Z"
                fill={color}
            />
        </Svg>
    );
};

export default PickerIcon;
