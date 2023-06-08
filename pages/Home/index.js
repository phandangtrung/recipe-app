import React, { useCallback, useState, useEffect, useRef } from 'react';
import { SafeAreaView, Image, Text, View, TouchableOpacity, Animated, TextInput, Dimensions } from 'react-native';
import { homeStyles } from './styled'
import RecepButton from '../../components/RecepButton';
import AvatarImage from '../../assets/images/avatar.jpeg';
import MenuIcon from '../../assets/icon/menu-icon.png';
import SearchIcon from '../../assets/icon/search-icon.png';
import SlideIcon from '../../assets/icon/slide-icon.png'
import Carousel from 'react-native-snap-carousel';
import AdsTag from '../../components/AdsTag';
import { foodsAds } from '../../constants';

const Home = ({ navigation }) => {
    const isCarousel = useRef(null);
    const SLIDER_WIDTH = Dimensions.get('window').width
    const ITEM_WIDTH = Dimensions.get('window').width - 100

    return (
        <SafeAreaView style={homeStyles.wrapper}>
            <View style={homeStyles.header}>
                <View style={homeStyles.userInfo}>
                    <Image style={homeStyles.avatar} source={AvatarImage} />
                    <View style={homeStyles.userName}><Text>Hello, <Text style={homeStyles.textHL}>Trung</Text></Text></View>
                </View>
                <Image style={homeStyles.menuIcon} source={MenuIcon} />
            </View>
            <Text style={homeStyles.title}>Choose the best dish for you</Text>
            <View style={homeStyles.searchBox}>
                <View style={homeStyles.leftBox}>
                    <Image style={homeStyles.searchIcon} source={SearchIcon} />
                    <TextInput style={homeStyles.input} placeholder='Search' />
                </View>
                <Image style={homeStyles.slideIcon} source={SlideIcon} />
            </View>
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={foodsAds}
                renderItem={AdsTag}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
            />
            <View>
                
            </View>
        </SafeAreaView>
    );
}

export default Home;