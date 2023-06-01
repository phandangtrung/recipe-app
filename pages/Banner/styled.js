import { StyleSheet } from 'react-native';


export const bannerStyles = StyleSheet.create({
    bannerWrapper: {
        position: 'relative',
        height: '100%'
    },
    bannerTitle: {
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
    bannerImage: {
        resizeMode: 'contain',
        height: 350,
        width: '90%',
    },
    bannerContent: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        text: {
            fontSize: 30,
            width: '55%',
            fontFamily: 'Playfair-Black',
            textTransform: 'capitalize',
            textAlign: 'center',
            marginBottom: 10
        },
        subText: {
            fontFamily: 'Mulish-Semi',
            textTransform: 'capitalize',
            width: '70%',
            textAlign: 'center'
        },
    },
    bannerButton: {
        width: '100%',
        marginTop: 40,
        paddingLeft: 30,
        paddingRight: 30
    }
});