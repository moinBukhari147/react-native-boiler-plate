import { Redirect } from 'expo-router';

const Index = () => {
    return <Redirect href={'/(protected)'} />;
};

export default Index;
