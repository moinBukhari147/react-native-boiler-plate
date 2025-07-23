import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DropdownIcon = ({ color = '#FCFCFC', size = 14, rotate = 0, mr = 0 }) => {
    const aspectRatio = 11 / 14; // Based on the original width and height of the SVG

    return (
        <Svg
            width={size}
            height={size * aspectRatio}
            viewBox="0 0 14 11"
            fill="none"
            style={{ transform: [{ rotate: `${rotate}deg` }], marginRight: mr }}
        >
            <Path
                d="M8.67726 9.41769C7.88866 10.6318 6.11134 10.6318 5.32274 9.4177L1.2124 3.08941C0.34819 1.75887 1.30309 0 2.88966 0L11.1103 0C12.6969 0 13.6518 1.75887 12.7876 3.08941L8.67726 9.41769Z"
                fill={color}
            />
        </Svg>
    );
};

export default DropdownIcon;
