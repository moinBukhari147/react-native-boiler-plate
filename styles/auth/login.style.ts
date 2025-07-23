import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { FONT, FONT_SIZE } from '@/constant';
import { ThemeColors } from '@/constant/colors';

// =================================================================
//                            Types
// =================================================================
type StyleArgsType = {
    colors: ThemeColors;
};

// Define the return type of styles
export type StylesType = {
    container: ViewStyle;
    innerContainer: ViewStyle;
    heading: TextStyle;
    text: TextStyle;
};

// =================================================================
//                            Styles
// =================================================================
const getStyles = (args: StyleArgsType): StylesType => {
    const { colors } = args;
    return StyleSheet.create<StylesType>({
        container: {
            flex: 1,
        },
        innerContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        heading: {
            color: colors.foreground,
            fontFamily: FONT.primarySemiBold,
            fontSize: FONT_SIZE.heading1,
            textAlign: 'center',
            marginBottom: 40,
        },
        text: {
            color: colors.foreground,
            fontFamily: FONT.primarySemiBold,
            fontSize: FONT_SIZE.body,
            textAlign: 'center',
            marginBottom: 16,
        },
    });
};

export default getStyles;
