import React, { useRef } from 'react';
import { Text, View, TouchableOpacity, DimensionValue } from 'react-native';
import getStyles, { StylesType } from './style';

// =================================================================
//                            Types
// =================================================================
type ButtonPropType = {
    mt?: DimensionValue;
    mb?: DimensionValue;
    width?: DimensionValue | undefined;
    height?: DimensionValue | undefined;
    btnColor?: string;
    titleColor?: string;
    title: string;
    isDisabled?: boolean;
    disabledColor?: string;
    pd_h?: DimensionValue | undefined;
    onPress: () => void;
};

// =================================================================
//                            Component
// =================================================================
// By default, the button contains the standard color and title color that we are using in our whole app.
// we cab cstomize the button by passing desired titleColor and btnColor:
// And we can customize the size of the button by providing the padding as the padding increases the size of the button decreases.
const Button: React.FC<ButtonPropType> = ({
    mt = 0,
    mb = 0,
    pd_h = 0,
    width = '100%',
    height = 44,
    btnColor = '#E50914',
    titleColor = '#FCFCFC',
    title = 'Click Me',
    isDisabled = false,
    disabledColor,
    onPress = () => {},
}) => {
    if (!disabledColor) disabledColor = btnColor;
    const styleArgs = {
        mt,
        mb,
        pd_h,
        width,
        height,
        btnColor,
        titleColor,
        isDisabled,
        disabledColor,
    };

    const styles: StylesType = getStyles(styleArgs);
    const isThrottle = useRef(false);

    const handlePress = () => {
        isThrottle.current = true;
        setTimeout(() => {
            isThrottle.current = false;
        }, 200);
        onPress();
    };
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity
                onPress={handlePress}
                disabled={isDisabled || isThrottle.current}
                style={styles.btn}
            >
                <Text allowFontScaling={false} style={styles.btnTitle}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
