import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
    key: 'root',
    storage: AsyncStorage,
    // WHILELIST
    whitelist: ['theme'],
};
