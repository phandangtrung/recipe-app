import { StyleSheet } from 'react-native';


const foodWrapper = {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#e7edf0',
    padding: 15,
    borderRadius: '15%',
    borderWidth: 1,
    borderColor: 'transparent',
    margin: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
}

export const foodTagStyles = StyleSheet.create({
    wrapper: {
        ...foodWrapper
    },
    wrapperActived: {
        ...foodWrapper,
        backgroundColor: '#ffffff',
        borderColor: '#81BAB4'
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 10,
        marginRight: 10,
    }
})