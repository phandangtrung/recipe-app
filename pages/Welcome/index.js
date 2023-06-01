import React from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
import { welcomeStyles } from './styled';
import WelcomeImage from '../../assets/images/welcome.png'
import RecepButton from '../../components/RecepButton';

const Welcome = ({navigation}) => {

    const handleMoveLogin = () => {
        navigation.navigate('Login');
    }
    const handleMoveSignUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <SafeAreaView style={welcomeStyles.wrapper}>
            <Text style={welcomeStyles.repTitle}>Receptoria</Text>
            <View style={welcomeStyles.imageContain}>
                <Image style={{ ...welcomeStyles.welcomeImage }} source={WelcomeImage} />
            </View>
            <Text style={welcomeStyles.title}>Welcome!</Text>
            <Text style={welcomeStyles.subTitle}>Come join us now</Text>
            <Text style={welcomeStyles.subTitle}>create an account or login</Text>
            <View style={welcomeStyles.resButton}>
                <RecepButton handlePress={handleMoveSignUp} type='outline' title='Sign up' />
            </View>
            <View style={welcomeStyles.loginButton}>
                <RecepButton handlePress={handleMoveLogin} title='Login' />
            </View>
            <View style={welcomeStyles.resPolicyContain}>
                <Text style={welcomeStyles.resTitle}>
                    By signing up, you are agreeing to our user <Text style={welcomeStyles.resHL}>Agreement</Text>  and <Text style={welcomeStyles.resHL}>Privacy Policy</Text>.
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default Welcome;