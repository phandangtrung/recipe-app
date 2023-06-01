import { StyleSheet } from 'react-native';


export const loginStyles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    imageContain: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginImage: {
        resizeMode: 'contain',
        height: 250,
        width: '90%',
    },
    loginTitle: {
        fontSize: 23,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    loginSubTile: {
        textAlign: 'center',
        fontSize: 15,
        color: '#767576',
        marginBottom: 30
    },
    forgotText: {
        width: '100%',
        textAlign: 'right',
        fontSize: 12,
        marginRight: 10,
        marginBottom: 20
    },
    signUpText: {
        fontSize: 11,
        marginTop: 40,
        textAlign: 'center',
    },
    textHL: {
        fontWeight: 'bold'
    }
})