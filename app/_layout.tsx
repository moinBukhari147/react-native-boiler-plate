import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RootComponent } from '@/components';
import { useAppFont } from '@/hooks';
import { store, persistor } from '@/redux/store';

const RootLayout = () => {
    // Load custom fonts before rendering the app
    // Replace it with the app.json cofiguration when ready for development or production built.
    // This also works well but that's the recomended way from the expo.
    // This works well in expo go.

    const { isLoaded, error } = useAppFont();
    if (!isLoaded && !error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Provider store={store}>
                {/*  Update the loading according to your demands i-e with the splash screen  or animation */}
                <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                    <SafeAreaProvider>
                        <RootComponent />
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        </GestureHandlerRootView>
    );
};

export default RootLayout;
