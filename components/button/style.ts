import { StyleSheet, DimensionValue, ViewStyle, TextStyle } from 'react-native';
import { FONT } from '@/constant';

// =================================================================
//                            Types
// =================================================================
type StyleArgsType = {
    mt?: DimensionValue;
    mb?: DimensionValue;
    width?: DimensionValue;
    height?: DimensionValue;
    btnColor?: string;
    titleColor?: string;
    pd_h?: DimensionValue;
    isDisabled?: boolean;
    disabledColor: string;
};

// Define the return type of styles
export type StylesType = {
    btnContainer: ViewStyle;
    btn: ViewStyle;
    btnTitle: TextStyle;
};

// =================================================================
//                            Styles
// =================================================================
const getStyles = (args: StyleArgsType): StylesType => {
    return StyleSheet.create<StylesType>({
        btnContainer: {
            height: args.height,
            width: '100%',
            marginTop: args.mt,
            marginBottom: args.mb,
            paddingHorizontal: args.pd_h,
            alignItems: 'center',
        },

        btn: {
            width: args.width,
            height: '100%',
            backgroundColor: args.isDisabled ? args.disabledColor : args.btnColor,
            opacity: args.isDisabled ? 0.7 : 1,
            borderRadius: 28,
            justifyContent: 'center',
            alignItems: 'center',
        },
        btnTitle: {
            color: args.titleColor,
            textAlign: 'center',
            fontSize: 16,
            fontFamily: FONT.primarySemiBold,
        },
    });
};

export default getStyles;
