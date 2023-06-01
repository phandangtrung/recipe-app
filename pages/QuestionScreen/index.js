import { useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import BackIcon from '../../assets/icon/back-arrow.png';
import FoodTag from '../../components/FoodTag';
import TabSlider from '../../components/TabSlider';
import { foods } from '../../constants/index';
import { shuffle } from '../../utils/arrayAction';
import { questionScreenStyles } from './styled';

const QuestionScreen = ({ navigation }) => {
    const [currentTab, setCurrentTab] = useState(0);
    const tabNums = 3;

    const handleMoveHome = () => {
        navigation.navigate('Home')
    }

    const handleMoveStep = (direction = 'next') => {
        let currTab = direction === 'next' ? currentTab + 1 : currentTab - 1;
        if (currTab < 0) return;
        if (currTab >= tabNums) {
            handleMoveHome();
            return;
        }
        setCurrentTab(currTab);
    }

    const renderFoods = (foodArray) => {
        return <View style={questionScreenStyles.foodWrapper}>
            {foodArray.map((food) => <FoodTag key={food.name} name={food.name} imageSrc={food.image} />)}
        </View>
    }

    const renderTabContent = (tabNum) => {
        switch (tabNum) {
            case 0:
                return renderFoods(shuffle(foods));
            case 1:
                return renderFoods(shuffle(foods));
            case 2:
                return renderFoods(shuffle(foods));
            default:
                break;
        }
    }

    return (
        <SafeAreaView>
            <View style={questionScreenStyles.wrapper}>
                <View style={questionScreenStyles.header}>
                    <View style={questionScreenStyles.leftHeader}>
                        <TouchableOpacity onPress={() => handleMoveStep('back')} style={questionScreenStyles.backButton}>
                            <Image style={questionScreenStyles.backButton.image} source={BackIcon} />
                        </TouchableOpacity>
                        <View style={questionScreenStyles.steps}><Text style={questionScreenStyles.textGray}>Step {currentTab + 1}</Text></View>
                    </View>
                    <TouchableOpacity onPress={() => handleMoveStep('next')}>
                        <View style={questionScreenStyles.skipButton}><Text style={questionScreenStyles.textGray}>Skip question</Text></View>
                    </TouchableOpacity>
                </View>
                <TabSlider tabNums={3} currentTab={currentTab} />
                <Text style={questionScreenStyles.title}>Choose at least recipes you like!</Text>
                <Text style={questionScreenStyles.subTitle}>Select all that applies:</Text>
                {renderTabContent(currentTab)}
            </View>
        </SafeAreaView>
    );
}

export default QuestionScreen;