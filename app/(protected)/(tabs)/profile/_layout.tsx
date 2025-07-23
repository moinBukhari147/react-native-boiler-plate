import { Stack } from 'expo-router';
import { THEME_COLORS } from '@/constant';
import { useAppSelector } from '@/redux/hooks';

const ProfileStack = () => {
    const appliedTheme = useAppSelector((state) => state.theme.appliedTheme);
    const colors = THEME_COLORS[appliedTheme];
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: colors.backgroud,
                    paddingHorizontal: 16,
                },
            }}
        />
    );
};

export default ProfileStack;
