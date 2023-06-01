import { StyleSheet } from 'react-native';


export const inputStyles = StyleSheet.create({
    input: {
        position: 'relative',
        height: 50,
        minWidth: '100%',
        borderColor: '#c4c4c3',
        borderRadius: 14,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 40
    },
    hide: {
        iconWrapper: {
            position: 'absolute',
            top: 23,
            right: 25,
        },
        icon: {
            resizeMode: 'contain',
            width: 30,
            height: 30,
        },
    },
    unhide: {
        iconWrapper: {
            position: 'absolute',
            top: 23,
            right: 30,
        },
        icon: {
            resizeMode: 'contain',
            width: 20,
            height: 30,
        }, 
    }
})