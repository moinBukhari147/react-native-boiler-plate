import { useFonts } from 'expo-font';

// This is hook to load custom fonts in the app
// The useFonts hook from expo-font is used to load the fonts
// This hook is to use the fonts in expo go. and can also be used in the production.
// But the recommended way is to define them is app.json config so that they built with the app.
// But for that you need the development or production build.
// Hence use this hook for development in expo go and shift to app.json config for production builds.

export default () => {
    const [isLoaded, error] = useFonts({
        'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('@/assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
        'NunitoSans_10pt-Regular': require('@/assets/fonts/NunitoSans_10pt-Regular.ttf'),
        'NunitoSans_10pt-Medium': require('@/assets/fonts/NunitoSans_10pt-Medium.ttf'),
        'NunitoSans_10pt-SemiBold': require('@/assets/fonts/NunitoSans_10pt-SemiBold.ttf'),
        'NunitoSans_10pt-Bold': require('@/assets/fonts/NunitoSans_10pt-Bold.ttf'),
        // Add more fonts as needed
    });

    return { isLoaded, error };
};
