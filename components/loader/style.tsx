import { StyleSheet, ViewStyle } from 'react-native';
import { ThemeColors } from '@/constant/colors';

// =================================================================
//                            Types
// =================================================================

// Define the return type of styles
export type StylesType = {
    container: ViewStyle;
    lottie: ViewStyle;
};

// =================================================================
//                            Styles
// =================================================================
const getStyles = (colors: ThemeColors): StylesType => {
    return StyleSheet.create<StylesType>({
        container: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor:
                colors.theme === 'dark' ? 'rgba(11, 11, 11, 0.8)' : 'rgba(253, 253, 253, 0.8)',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
        },
        lottie: {
            width: 240,
            height: 240,
        },
    });
};

export default getStyles;
