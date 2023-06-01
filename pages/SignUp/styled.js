import { StyleSheet } from 'react-native';


export const signUpStyles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    imageContain: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    signUpImage: {
        resizeMode: 'contain',
        height: 150,
        width: '90%',
    },
    signUpTitle: {
        fontSize: 23,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    signUpSubTile: {
        textAlign: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        fontSize: 15,
        color: '#767576',
        marginBottom: 30,
        lineHeight: 25
    },
    signUpButton: {
        width: '100%',
        marginTop: 40
    }
})