import React, { useCallback, useState, useEffect } from 'react';
import { SafeAreaView, Image, Text, View, TouchableOpacity, Animated } from 'react-native';
import { bannerStyles } from './styled'
import { adsContent } from '../../constants';
import RecepButton from '../../components/RecepButton';

const Banner = ({navigation}) => {
    const handleMoveNext = () => {
        navigation.navigate('Welcome')
    }
    return (
        <SafeAreaView style={bannerStyles.bannerWrapper}>
            <Text style={bannerStyles.bannerTitle}>Receptoria</Text>
            <View style={bannerStyles.imageContain}>
                <Animated.Image style={{ ...bannerStyles.bannerImage }} source={adsContent[2].image} />
            </View>
            <View style={bannerStyles.bannerContent}>
                <Text style={bannerStyles.bannerContent.text}>we have 9000+ review on our app</Text>
                <Text style={bannerStyles.bannerContent.subText}>we have 6000+ user reviewers,</Text>
                <Text style={bannerStyles.bannerContent.subText}>you can check in the application store</Text>
            </View>
            <View style={bannerStyles.bannerButton}>
                <RecepButton handlePress={handleMoveNext} title={'Let\'s go'} />
            </View>
        </SafeAreaView>
    );
}

export default Banner;