// components/GlobalLoader.tsx
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { LottieLoader } from '@/assets/lottie';
import { ThemeColors } from '@/constant/colors';
import { useAppSelector } from '@/redux/hooks';
import getStyles from './style';

// =================================================================
//                            Component
// =================================================================
const Loader: React.FC<{ colors: ThemeColors }> = ({ colors }) => {
    const isAppLoading = useAppSelector((state) => state.loader.appLoading);
    // const isRefreshing = useAppSelector((state) => state.auth.isRefreshing);
    const styles = getStyles(colors);
    if (!isAppLoading) return null;

    return (
        <View style={styles.container}>
            <LottieView source={LottieLoader} autoPlay loop style={styles.lottie} />
        </View>
    );
};

export default Loader;
