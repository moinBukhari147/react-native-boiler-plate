import { useEffect } from 'react';
import { Appearance } from 'react-native';
import { setAppliedTheme } from '@/redux/features/themeSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

// This hook is used to get the theme colors based on the theme selected by the user.
// If the user has selected the system theme, then the theme is set based on the mobile theme.
// Ohter wise the user selected dark or light theme is used.
// Use this hook in root layout or root component so that when ever the app theme changes, it update the applied theme and apply the listerner if theme = system.

export default () => {
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
