import AsyncStorage from '@react-native-async-storage/async-storage';

// The sclide to be persisted will be added in the whitelist here
export default {
    key: 'root',
    storage: AsyncStorage,
    // WHILELIST
    whitelist: ['theme', 'app'],
};
