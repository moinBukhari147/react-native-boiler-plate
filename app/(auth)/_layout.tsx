import { Stack } from 'expo-router';
import { THEME_COLORS } from '@/constant';
import { useAppSelector } from '@/redux/hooks';

const AuthLayout = () => {
    const appliedTheme = useAppSelector((state) => state.theme.appliedTheme);
    const colors = THEME_COLORS[appliedTheme];
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'ios_from_right', // Adjust the animation as needed
                gestureDirection: 'horizontal', // Adjust the gesture direction as needed for back navigation.
                presentation: 'card',
                contentStyle: {
                    backgroundColor: colors.backgroud, // Apply the background color based on the applied theme on all the screens under (auth)
                    paddingHorizontal: 16, // Optional: Add horizontal padding to all screens under (auth)
                },
            }}
        />
        // For custom screenOption for the specific screen under (auth) layout
        // <Stack.Screen
        //     name="screenName"
        //     options={{ you option here }}
        // />
        // And wrap this under the <Stack> component
        // Don't need to define all the screen just define the one you want to customize
    );
};

export default AuthLayout;
