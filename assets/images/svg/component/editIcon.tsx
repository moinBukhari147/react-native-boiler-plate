import { ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
    color?: string;
    size?: number;
    mr?: number;
};

const SVGComponent: React.FC<Props> = ({ color = '#FCFCFC', size = 24, mr = 0 }) => (
    <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        style={{ marginRight: mr } as ViewStyle}
    >
        <Path
            d="M7.243 17.9969H3V13.7539L14.435 2.31891C14.6225 2.13144 14.8768 2.02612 15.142 2.02612C15.4072 2.02612 15.6615 2.13144 15.849 2.31891L18.678 5.14691C18.771 5.23978 18.8447 5.35007 18.8951 5.47147C18.9454 5.59287 18.9713 5.72299 18.9713 5.85441C18.9713 5.98582 18.9454 6.11595 18.8951 6.23735C18.8447 6.35875 18.771 6.46904 18.678 6.56191L7.243 17.9969ZM3 19.9969H21V21.9969H3V19.9969Z"
            fill={color}
        />
    </Svg>
);

export default SVGComponent;
