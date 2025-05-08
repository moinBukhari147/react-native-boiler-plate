// Clolors for both dark and light themes
const commonColors = {
    brand: '#E50914',
    redIndicator: '#E4777D',
    yellowIndicator: '#DEC37F',
    greenIndicator: '#ADE257',
};
type CommonColorsType = typeof commonColors;

type ColorsType = {
    backgroud: string;
    text: string;
    textWithOpacity: (opacity: number) => string; // Function returning a string with opacity
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

// THEME COLORS OBJECT
export const themeColors: ThemeColorsObj = {
    dark: {
        backgroud: '#262626',
        text: '#FCFCFC',
        textWithOpacity: (opacity: number) => `rgba(252, 252, 252, ${opacity})`,
        backgroudSec: '#404040',
        theme: 'dark',
        ...commonColors,
    },
    light: {
        backgroud: '#FCFCFC',
        text: '#262626',
        textWithOpacity: (opacity: number) => `rgba(38, 38, 38, ${opacity})`,
        backgroudSec: '#E7E7E7',
        theme: 'light',
        ...commonColors,
    },
};
