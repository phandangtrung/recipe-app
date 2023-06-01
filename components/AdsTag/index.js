import { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { foodTagStyles } from './styled';

const FoodTag = (props) => {
    const { name, imageSrc, handleFoodPicked = () => {} } = props;
    const [isActived, setIsActived] = useState(false);

    const handleToggleFood = () => {
        const toggled = !isActived;
        setIsActived(toggled);
        handleFoodPicked(toggled);
    }

    return (
        <TouchableOpacity onPress={handleToggleFood} style={isActived ? foodTagStyles.wrapperActived : foodTagStyles.wrapper}>
            <Image source={imageSrc} style={foodTagStyles.image} />
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}

export default FoodTag;