import { Stack, usePathname } from 'expo-router';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { THEME_COLORS } from '@/constant';
import { useInitAuth, useSyncThemeColor } from '@/hooks';
import { useAppSelector } from '@/redux/hooks';
import Loader from '../loader/loader';

// // =================================================================
// //                            Types
// // =================================================================
// type RootComponentPropsType = {
//     children: ReactNode;
// };

// =================================================================
//                            Component
// =================================================================
const RootComponent = () => {
    useSyncThemeColor();
    const { isLoading: isAuthLoading } = useInitAuth();
    const appliedTheme = useAppSelector((state) => state.theme.appliedTheme);
    let colors = THEME_COLORS[appliedTheme]; // Colors to apply background color based on the applied theme
    let statusBarStyle: StatusBarStyle = appliedTheme === 'dark' ? 'light' : 'dark'; // Status bar style based on the applied theme
    const path = usePathname();

    // If wanted to bypass the default theme and set specific background color for specific screen
    if (path) {
        switch (path) {
            case '/screenpath':
                statusBarStyle = 'light'; // Status bar style for that specific screen.
                colors = THEME_COLORS.dark; // Background color for that specific screen using the colors.
                break;
            // add more cases for other specific screens if needed
        }
    }

    // Update the according to you loader when the auth is loading and initalizing
    if (isAuthLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: colors.foreground, fontSize: 20 }}>Auth loading ...</Text>
            </View>
        );
    }
    return (
        <>
            <StatusBar style={statusBarStyle} translucent />
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.backgroud }}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                        contentStyle: {
                            backgroundColor: colors.backgroud,
                        },
                    }}
                />
                <Loader colors={colors} />
            </SafeAreaView>
        </>
    );
};

export default RootComponent;
