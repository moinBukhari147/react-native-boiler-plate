import { Button, Text, View } from 'react-native';
import { themeColors, ThemeColors } from '@/constant/colors';
// import { useThemeColors } from '@/hooks';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setAppTheme } from '@/redux/slice/themeSlice';

const Index = () => {
    const appliedTheme = useAppSelector((state) => state.theme.appliedTheme);
    const colors: ThemeColors = themeColors[appliedTheme];
    const dispatch = useAppDispatch();
    const handleDarkButtonPress = () => {
        dispatch(setAppTheme('dark'));
    };
    const handleLightButtonPress = () => {
        dispatch(setAppTheme('light'));
    };
    const handleSystemButtonPress = () => {
        dispatch(setAppTheme('system'));
    };
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.backgroud,
            }}
        >
            <Text>Reshta.pk app</Text>
            <Text style={{ fontSize: 24, color: colors.brand }}>Current Theme: {colors.theme}</Text>
            <Button title="Dark" onPress={handleDarkButtonPress} color={'green'} />
            <Button title="Light" onPress={handleLightButtonPress} color={'blue'} />
            <Button title="System" onPress={handleSystemButtonPress} color={'red'} />
        </View>
    );
};

export default Index;
