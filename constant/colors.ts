// Clolors for both dark and light themes
const commonColors = {
    brand: '#89e509ff',
    redIndicator: '#E4777D',
    yellowIndicator: '#EDBC42',
    greenIndicator: '#9BCF48',
};
// =================================================================
//                            Types
// =================================================================

type CommonColorsType = typeof commonColors;

type ColorsType = {
    backgroud: string;
    foreground: string;
    foregroundWithOpacity: (opacity: number) => string; // Function returning a string with opacity
    backgroudSec: string;
    theme: 'dark' | 'light';
};

// THEME COLORS TYPE
export type ThemeColors = CommonColorsType & ColorsType;

//
type ThemeColorsObj = {
    dark: ThemeColors;
    light: ThemeColors;
};

// =================================================================
//                            Colors
// =================================================================
// THEME COLORS OBJECT
const THEME_COLORS: ThemeColorsObj = {
    dark: {
        backgroud: '#262626',
        foreground: '#FCFCFC',
        foregroundWithOpacity: (opacity: number) => `rgba(252, 252, 252, ${opacity})`,
        backgroudSec: '#404040',
        theme: 'dark',
        ...commonColors,
    },
    light: {
        backgroud: '#FCFCFC',
        foreground: '#262626',
        foregroundWithOpacity: (opacity: number) => `rgba(38, 38, 38, ${opacity})`,
        backgroudSec: '#E7E7E7',
        theme: 'light',
        ...commonColors,
    },
};
export default THEME_COLORS;
