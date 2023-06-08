import { StyleSheet } from 'react-native';


export const homeStyles = StyleSheet.create({
    header: {
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textHL: {
        fontWeight: 600
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 200,
        marginRight: 10
    },
    menuIcon: {
        width: 20,
        height: 20,
    },
    title: {
        margin: 20,
        marginBottom: 0,
        fontSize: 20,
        fontWeight: 500
    },
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        margin: 20
    },
    input: {
        maxWidth: '85%',
    },
    leftBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    slideIcon: {
        width: 20,
        height: 20
    }
});