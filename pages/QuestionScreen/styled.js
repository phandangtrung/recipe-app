import { StyleSheet } from 'react-native';


export const questionScreenStyles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textGray: {
        color: '#949499'
    },
    backButton: {
        backgroundColor: '#ffffff',
        borderRadius: '15%',
        width: 35,
        height: 35,
        padding: 10,
        position: 'relative',
        marginRight: 10,
        image: {
            resizeMode: 'contain',
            width: 25,
            position: 'absolute',
            top: -32,
            left: 5
        }
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        fontFamily: 'Mulish-Semi',
    },
    subTitle: {
        fontSize: 15,
        color: '#767576',
        marginBottom: 30,
    },
    foodWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }

})