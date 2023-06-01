import { StyleSheet } from 'react-native';


export const adsStyles = StyleSheet.create({
    adsWrapper: {
        position: 'relative',
        height: '100%'
    },
    adsTitle: {
        fontFamily: 'Pacifico-Regular',
        textAlign: 'center',
        fontSize: 35,
        marginTop: 20
    },
    imageContain: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    slideImage: {
        resizeMode: 'contain',
        height: 350,
        width: '90%',
    },
    adsDetail: {
        marginTop: 30,
        paddingLeft: 25
    },
    detailTitle: {
        fontFamily: 'Playfair-Black',
        fontSize: 32,
        width: 300
    },
    detailSub: {
        paddingTop: 15
    },
    detail: {
        fontFamily: 'Mulish-Semi'
    },
    nextSlideButton: {
        position: 'absolute',
        resizeMode: 'contain',
        width: 70,
        maxHeight: 200,
        height: 200,
        bottom: 40,
        right: 0,
    },
    carouselContain: {
        flexDirection: 'row',
        marginTop: 20
    },
    carouselButton: {
        width: 8,
        height: 8,
        border: 2,
        borderColor: '#81BAB4',
        borderWidth: 1,
        borderRadius: '50%',
        marginRight: 5,
        transition: '0.5s, width 0.5s',
        actived: {
            width: 35,
            backgroundColor: '#81bab4',
            transition: '0.5s, width 0.5s',
        }
    },
    nextSlideIconContain: {
        position: 'absolute',
        bottom: 119,
        right: 20,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        icon: {
            resizeMode: 'contain',
            width: 45,
        }
    }
});