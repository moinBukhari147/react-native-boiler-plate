import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from '@/components';
import { THEME_COLORS } from '@/constant';
import { login } from '@/redux/features/authSlice';
import { hideAppLoader, showAppLoader } from '@/redux/features/loaderSlice';
import { setAppTheme } from '@/redux/features/themeSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loginStyle } from '@/styles';

// =================================================================
//                            Screen
// =================================================================
const Login = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const appliedTheme = useAppSelector((state) => state.theme.appliedTheme);
    const colors = THEME_COLORS[appliedTheme];
    const styles = loginStyle({ colors });

    // <<<<<<<<<<<<<<<<<<<<<<<<<<< Function >>>>>>>>>>>>>>>>>>>>>>>>
    const handleDarkButtonPress = () => {
        dispatch(setAppTheme('dark'));
    };

    // ==========================
    const handleLightButtonPress = () => {
        dispatch(setAppTheme('light'));
    };

    // ==========================
    const handleSystemButtonPress = () => {
        dispatch(setAppTheme('system'));
    };

    // ==========================
    const handleShowLoader = () => {
        dispatch(showAppLoader());
        setTimeout(() => {
            dispatch(hideAppLoader());
        }, 6000);
    };

    // ==========================
    const handleLogin = () => {
        const tokens = {
            accessToken: 'abcd',
            refreshToken: '1234',
        };
        dispatch(login(tokens));
        router.dismissAll();
        router.replace('/(protected)/(tabs)/home');
    };

    // <<<<<<<<<<<<<<<<<<<<<<<<<<< Render >>>>>>>>>>>>>>>>>>>>>>>>
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.heading}>LOGIN</Text>
                <Text style={styles.text}>Current Applied Theme: {colors.theme}</Text>
                <Button
                    title="Dark"
                    mb={20}
                    onPress={handleDarkButtonPress}
                    btnColor={colors.backgroudSec}
                    titleColor={colors.foreground}
                />
                <Button
                    title="Light"
                    mb={20}
                    onPress={handleLightButtonPress}
                    btnColor={colors.foreground}
                    titleColor={colors.backgroud}
                />
                <Button
                    title="System"
                    mb={20}
                    onPress={handleSystemButtonPress}
                    btnColor={colors.backgroudSec}
                    titleColor={colors.foreground}
                />
                <Button
                    title="Show Loader"
                    mb={20}
                    onPress={handleShowLoader}
                    btnColor={colors.foreground}
                    titleColor={colors.backgroud}
                />
                <Button
                    title="Back"
                    onPress={() => {
                        router.back();
                    }}
                    btnColor={colors.backgroudSec}
                    titleColor={colors.foreground}
                />
            </View>
            <Button title="Login" mb={20} width={200} onPress={handleLogin} />
        </View>
    );
};

export default Login;
