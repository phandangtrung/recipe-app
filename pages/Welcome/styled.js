import { StyleSheet } from 'react-native';


export const welcomeStyles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        height: '100%'
    },
    repTitle: {
        fontFamily: 'Pacifico-Regular',
        textAlign: 'center',
        fontSize: 35,
        marginTop: 20
    },
    imageContain: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageContain: {
        resizeMode: 'contain',
        height: 350,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    welcomeImage: {
        resizeMode: 'contain',
        height: 350,
        width: '70%',
    },
    title: {
        fontFamily: 'Mulish-Semi',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 15
    },
    subTitle: {
        textAlign: 'center',
        color: '#888585',
        fontSize: 11
    },
    resButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        marginTop: 20,
        marginBottom: 20
    },
    loginButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 60,
        paddingRight: 60
    },
    resPolicyContain: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    resTitle: {
        width: '70%',
        fontSize: 10,
        textAlign: 'center'
    },
    resHL: {
        color: '#81bab4'
    }
});