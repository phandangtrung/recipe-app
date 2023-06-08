import { Dimensions, StyleSheet } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Dimensions.get('window').width - 100

export const adsStyles = StyleSheet.create({
    container: {
        backgroundColor: '#81bab4',
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'space-between',
        borderRadius: 20,
        height: 150,
        width: ITEM_WIDTH,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    textContain: {
        width: '55%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    body: {
        color: '#f6f9f9',
        fontSize: 15,
        lineHeight: 25
    },
    actionContain: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    action: {
        color: '#fbd17f',
        marginRight: 5,
        fontSize: 20,
        fontWeight: 500,
    },
    arrowIcon: {
        width: 20,
        height: 10
    },
    image: {
        width: "40%",
        height: '100%'
    }
})