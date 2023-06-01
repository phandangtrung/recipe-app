import { SafeAreaView, Image, Text, View, TouchableOpacity } from 'react-native';
import { signUpStyles } from './styled';
import RecepInput from '../../components/RecepInput';
import RecepButton from '../../components/RecepButton';
import SignUpImage from '../../assets/images/sign_up.png'

const SignUp = ({ navigation }) => {

    return (
        <SafeAreaView>
            <View style={signUpStyles.wrapper}>
                <View style={signUpStyles.imageContain}>
                    <Image style={signUpStyles.signUpImage} source={SignUpImage} />
                </View>
                <Text style={signUpStyles.signUpTitle}>Getting started!</Text>
                <Text style={signUpStyles.signUpSubTile}>Look like you are new to us! Create an account for a complete experience.</Text>
                <View style={signUpStyles.inputWrapper}>
                    <RecepInput placeHolder='Username' />
                </View>
                <View style={signUpStyles.inputWrapper}>
                    <RecepInput placeHolder='Email' />
                </View>
                <View style={signUpStyles.inputWrapper}>
                    <RecepInput placeHolder='Password' isPassword={true} />
                </View>
                <View style={signUpStyles.signUpButton}>
                    <RecepButton title='Next' />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SignUp;