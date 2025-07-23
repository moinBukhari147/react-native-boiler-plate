// app/(tabs)/_layout.tsx
import { Tabs, usePathname } from 'expo-router';
import { HomeFilledIcon, HomeIcon, ProfileFilledIcon, ProfileIcon } from '@/assets/images';
import { THEME_COLORS, FONT } from '@/constant';
import { useAppSelector } from '@/redux/hooks';

const TabLayout = () => {
    const appliedTheme = useAppSelector((state) => state.theme.appliedTheme);
    let colors = THEME_COLORS[appliedTheme];
    const path = usePathname();
    if (path && path === '/home/indexHome') colors = THEME_COLORS.dark;

    return (
        <Tabs
            screenOptions={{
                // TAB BAR STYLES
                tabBarStyle: {
                    backgroundColor: colors.backgroud,
                    borderColor: colors.backgroudSec,
                    paddingTop: 4,
                    height: 48,
                },
                tabBarShowLabel: true,
                tabBarActiveTintColor: colors.foreground,

                // HEADER STYLES
                headerShown: true,
                headerStyle: {
                    backgroundColor: colors.backgroud,
                    // shadowColor: colors.backgroudSec,
                    // shadowOpacity: 0.5,
                },
                headerTitleContainerStyle: {
                    justifyContent: 'flex-start',
                },
                headerTitleStyle: {
                    fontSize: 20,
                    color: colors.foreground,
                    fontFamily: FONT.primarySemiBold,
                },
                headerTitleAlign: 'center',
                headerStatusBarHeight: 8,
                headerShadowVisible: false,
                headerTitleAllowFontScaling: false,

                // GLOBAL SCENE STYLE
                sceneStyle: {
                    backgroundColor: colors.backgroud,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => {
                        const Icon = focused ? HomeFilledIcon : HomeIcon;
                        return <Icon size={24} color={color} />;
                    },
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => {
                        const Icon = focused ? ProfileFilledIcon : ProfileIcon;
                        return <Icon size={24} color={color} />;
                    },
                }}
            />
        </Tabs>
    );
};

export default TabLayout;
