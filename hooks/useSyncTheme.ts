import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setAppliedTheme } from '@/redux/slice/themeSlice';
// import { ThemeColors, themeColors } from '../constant/colors';

// This hook is used to get the theme colors based on the theme selected by the user.
// If the user has selected the system theme, then the theme is set based on the mobile theme.
// Ohter wise the user selected dark or light theme is used.
const useSyncThemeColor = () => {
    // Get the theme from the redux
    const dispatch = useAppDispatch();
    const appTheme = useAppSelector((state) => state.theme.appTheme);

    useEffect(() => {
        if (appTheme === 'system') {
            const appliedTheme = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';
            dispatch(setAppliedTheme(appliedTheme));
            const appearanceSubscription = Appearance.addChangeListener(({ colorScheme }) => {
                const appliedTheme = colorScheme === 'dark' ? 'dark' : 'light';
                dispatch(setAppliedTheme(appliedTheme));
            });
            return () => {
                appearanceSubscription?.remove();
            };
        } else {
            dispatch(setAppliedTheme(appTheme));
        }
    }, [appTheme, dispatch]);
};

export default useSyncThemeColor;
