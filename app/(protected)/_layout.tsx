// app/(main)/_layout.tsx
import { Redirect, usePathname, Stack } from 'expo-router';

import { StackAnimationTypes, SwipeDirectionTypes } from 'react-native-screens';
import { THEME_COLORS } from '@/constant';
import { useAppSelector } from '@/redux/hooks';

// This layout contain the auth guard logic and redirects the user accordingly to there authentication state.
const ProtectedLayout = () => {
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
    const isSessionExpired = useAppSelector((state) => state.auth.isSessionExpired);
    const isFreshStart = useAppSelector((state) => state.app.isFreshStart);

    const appliedTheme = useAppSelector((state) => state.theme.appliedTheme);
    let colors = THEME_COLORS[appliedTheme];
    const path = usePathname();
    let screenAnim: StackAnimationTypes = 'ios_from_right';
    let gestureDir: SwipeDirectionTypes = 'horizontal';

    // If wanted to bypass the default theme or screen animation them update this accordingly
    if (path) {
        switch (path) {
            case '/screenpath':
                screenAnim = 'slide_from_bottom'; // Custom animation for this specific screen
                colors = THEME_COLORS.dark; // Custom color for this specific screen
                gestureDir = 'vertical'; // Custom gesture direction for this specific screen
                break;
        }
    }

    if (!isAuthenticated && isFreshStart) {
        return <Redirect href="/(auth)/getstarted" />;
    } else if (isSessionExpired) {
        return <Redirect href="/(auth)/login?sessionExpired=true" />;
    } else if (!isAuthenticated) {
        return <Redirect href="/(auth)/login" />;
    }
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: screenAnim,
                gestureDirection: gestureDir,
                contentStyle: {
                    backgroundColor: colors.backgroud,
                },
            }}
        />
    );
};

export default ProtectedLayout;
