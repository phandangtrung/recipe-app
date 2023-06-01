import { SafeAreaView, Image, Text, View, TouchableOpacity } from 'react-native';
import { loginStyles } from './styled';
import LoginImage from '../../assets/images/login_logo.png'
import RecepInput from '../../components/RecepInput';
import RecepButton from '../../components/RecepButton';

const Login = ({navigation}) => {

    const handleMoveRegis = () => {
        navigation.navigate('SignUp')
    }

    const handleMoveQuestionScreen = () => {
        navigation.navigate('Question')
    }

    return (
        <SafeAreaView>
            <View style={loginStyles.wrapper}>
                <View style={loginStyles.imageContain}>
                    <Image style={loginStyles.loginImage} source={LoginImage} />
                </View>
                <Text style={loginStyles.loginTitle}>Hello Again!</Text>
                <Text style={loginStyles.loginSubTile}>Wellcome back you've been missed!</Text>
                <View style={loginStyles.inputWrapper}>
                    <RecepInput placeHolder='Username' />
                </View>
                <View style={loginStyles.inputWrapper}>
                    <RecepInput placeHolder='Password' isPassword={true} />
                </View>
                <Text style={loginStyles.forgotText}>Forgot password?</Text>
                <RecepButton title='Login' handlePress={handleMoveQuestionScreen} />
                <TouchableOpacity onPress={handleMoveRegis}>
                    <Text style={loginStyles.signUpText}>{'Don\'t have an account? '}
                        <Text style={loginStyles.textHL}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Login;