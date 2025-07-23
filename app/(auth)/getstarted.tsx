import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import { Button } from '@/components';
import { THEME_COLORS } from '@/constant';
import { useAppSelector } from '@/redux/hooks';
import { getstartedStyle } from '@/styles';

const Login = () => {
    const router = useRouter();
    const appliedTheme = useAppSelector((state) => state.theme.appliedTheme);
    const colors = THEME_COLORS[appliedTheme];
    const styles = getstartedStyle({ colors });
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.heading}>GetStartedScreen</Text>
            </View>
            <Button
                title="Get started"
                width={200}
                mb={40}
                onPress={() => {
                    router.push('/(auth)/login');
                }}
            />
        </View>
    );
};

export default Login;
