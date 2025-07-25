import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = ({ color = '#FCFCFC', size = 24 }) => {
    return (
        <Svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M2 19.5C2 18.1739 2.52678 16.9021 3.46447 15.9645C4.40215 15.0268 5.67392 14.5 7 14.5H17C18.3261 14.5 19.5979 15.0268 20.5355 15.9645C21.4732 16.9021 22 18.1739 22 19.5C22 20.163 21.7366 20.7989 21.2678 21.2678C20.7989 21.7366 20.163 22 19.5 22H4.5C3.83696 22 3.20107 21.7366 2.73223 21.2678C2.26339 20.7989 2 20.163 2 19.5Z"
                stroke={color}
                strokeWidth="1.8"
                strokeLinejoin="round"
            />
            <Path
                d="M12 9.5C14.0711 9.5 15.75 7.82107 15.75 5.75C15.75 3.67893 14.0711 2 12 2C9.92893 2 8.25 3.67893 8.25 5.75C8.25 7.82107 9.92893 9.5 12 9.5Z"
                stroke={color}
                strokeWidth="1.8"
            />
        </Svg>
    );
};

export default ProfileIcon;
