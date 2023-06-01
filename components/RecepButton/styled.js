import { StyleSheet } from 'react-native';


export const buttonStyles = StyleSheet.create({
    basicWrapper: {
        width: '100%',
        height: 50,
        backgroundColor: '#81BAB4',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    outlineWrapper: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#babab9'
    },
    basicText: {
        color: '#E6EBF2',
        fontSize: 15
    },
    outlineText: {
        color: '#54958f',
        fontSize: 15
    }
})