import { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { inputStyles } from './styled';
import HideIcon from '../../assets/icon/hide-icon.png';
import UnHideIcon from '../../assets/icon/unhide-icon.png';

const RecepInput = (props) => {
    const { handleOnchange = () => { }, placeHolder = '', inputType = 'default', inputValue, isPassword = false } = props;
    const [passMode, setPassMode] = useState('hide');

    const handleToggleHidePass = () => {
        const newMode = passMode === 'hide' ? 'unhide' : 'hide';
        setPassMode(newMode);
    }

    return (
        <View>
            <TextInput
                style={inputStyles.input}
                onChangeText={handleOnchange}
                value={inputValue}
                placeholder={placeHolder}
                keyboardType={inputType}
                secureTextEntry={isPassword && passMode === 'hide'}
            />
            {isPassword &&
                <TouchableOpacity onPress={handleToggleHidePass} style={inputStyles[passMode].iconWrapper}>
                    <Image style={inputStyles[passMode].icon} source={passMode === 'hide' ? HideIcon : UnHideIcon} />
                </TouchableOpacity>
            }
        </View>
    );
}

export default RecepInput;