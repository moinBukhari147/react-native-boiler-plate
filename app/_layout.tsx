import { Slot } from 'expo-router';
import { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useSyncThemeColor } from '@/hooks';
import { persistor, store } from '@/redux/store';

const ThemeSyncWrapper = ({ children }: { children: ReactNode }) => {
    useSyncThemeColor();
    return children;
};

const RootLayout = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <ThemeSyncWrapper>
                    <Slot />
                </ThemeSyncWrapper>
            </PersistGate>
        </Provider>
    );
};
export default RootLayout;
