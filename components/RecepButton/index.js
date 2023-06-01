import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from './styled';

const RecepButton = ({ title, type = 'basic', handlePress }) => {
    return (
        <TouchableOpacity onPress={handlePress} style={type === 'basic' ? buttonStyles.basicWrapper : buttonStyles.outlineWrapper}>
            <Text style={type === 'basic' ? buttonStyles.basicText : buttonStyles.outlineText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default RecepButton;