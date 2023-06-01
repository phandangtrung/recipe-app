import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, Text, View, TouchableOpacity, Animated } from 'react-native';
import { adsStyles } from './styled';
import NextSlideImage from '../../assets/images/next_button.png'
import NextIcon from '../../assets/icon/bounder_arrow.png'
import { adsContent } from '../../constants';

const AdsSlide = ({ navigation }) => {
    const [slideActived, setSlideActived] = useState(0);
    const [animation, setAnimation] = useState(new Animated.Value(0));
    const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 35,
            duration: 300,
            useNativeDriver: false
        }).start();
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }, [slideActived]);

  

    const nextSlideButton = () => {
        return <View>
            <Image style={adsStyles.nextSlideButton} source={NextSlideImage} />
            <TouchableOpacity onPress={handleActiveSlide} style={adsStyles.nextSlideIconContain}>
                <Image source={NextIcon} style={adsStyles.nextSlideIconContain.icon} />
            </TouchableOpacity>
        </View>
    }

    const handleActiveSlide = () => {
        const nextSlide = slideActived + 1;
        if (nextSlide > 1) {
            navigation.navigate('Banner')
        } else {
            setSlideActived(nextSlide);
            setAnimation(new Animated.Value(0))
            setFadeAnimation(new Animated.Value(0))
        }
    }

    const carouselButton = () => {
        const animationStyle = { ...adsStyles.carouselButton.actived, width: animation };
        return <View style={adsStyles.carouselContain}>
            <Animated.View style={[adsStyles.carouselButton, slideActived === 0 && animationStyle]}></Animated.View>
            <Animated.View style={[adsStyles.carouselButton, slideActived === 1 && animationStyle]}></Animated.View>
            <Animated.View style={[adsStyles.carouselButton, slideActived === 2 && animationStyle]}></Animated.View>
        </View>
    }

    return (
        <SafeAreaView style={adsStyles.adsWrapper}>
            <Text style={adsStyles.adsTitle}>Receptoria</Text>
            <View style={adsStyles.imageContain}>
                <Animated.Image style={{ ...adsStyles.slideImage, opacity: fadeAnimation }} source={adsContent[slideActived].image} />
            </View>
            <View style={adsStyles.adsDetail}>
                <Text style={adsStyles.detailTitle}>{adsContent[slideActived].title}</Text>
                <View style={adsStyles.detailSub}>
                    {adsContent[slideActived].subContent.map((sub) => <Text key={sub} style={adsStyles.detail}>{sub}</Text>)}
                </View>
                {carouselButton()}
            </View>
            {nextSlideButton()}
        </SafeAreaView>
    );
}

export default AdsSlide;