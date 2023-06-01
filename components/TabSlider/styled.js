import { StyleSheet } from 'react-native';


export const tabSliderStyles = StyleSheet.create({
    wrapper: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    grayLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#e0e0e0',
        position: 'relative'
    },
    activedLine: {
        position: 'absolute',
        top: '-100%',
        borderRadius: '50%',
        height: 4,
        backgroundColor: '#89c0b8'
    }
})