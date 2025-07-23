import { View, Text } from 'react-native';
import { Button } from '@/components';
import { THEME_COLORS } from '@/constant';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { homeStyle } from '@/styles';
import logoutUser from '@/utils/logout.util';

// =================================================================
//                            Screen
// =================================================================
const Home = () => {
    const dispatch = useAppDispatch();
    const appliedTheme = useAppSelector((state) => state.theme.appliedTheme);
    const colors = THEME_COLORS[appliedTheme];
    const styles = homeStyle({ colors });

    // <<<<<<<<<<<<<<<<<<<<<<<<< Functions >>>>>>>>>>>>>>>>>>>>>>>
    const handleLogoutButtonPress = async () => {
        await logoutUser(dispatch, false);
    };

    // <<<<<<<<<<<<<<<<<<<<<<<<<<< Render >>>>>>>>>>>>>>>>>>>>>>>>
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.heading}>Home</Text>
            </View>
            <Button title="Logout" onPress={handleLogoutButtonPress} pd_h={24} />
        </View>
    );
};

export default Home;
