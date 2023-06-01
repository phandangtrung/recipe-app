import { useState, useEffect } from 'react';
import { View, Image, Text, Animated, Dimensions } from 'react-native';
import { tabSliderStyles } from './styled';

const TabSlider = (props) => {
    const { tabsNum = 3, currentTab = 0 } = props;
    const screenWidth = Dimensions.get('window').width;
    const tabWidth = (screenWidth - 40) / tabsNum;
    const [animation, setAnimation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animation, {
            toValue: tabWidth * currentTab,
            duration: tabWidth,
            useNativeDriver: false
        }).start();
    }, [currentTab]);

    return (
        <View style={tabSliderStyles.wrapper}>
            <View style={tabSliderStyles.grayLine}>
                <Animated.View style={{ ...tabSliderStyles.activedLine, width: tabWidth, left: animation }}></Animated.View>
            </View>
        </View>
    );
}

export default TabSlider;