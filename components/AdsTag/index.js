import React from 'react'
import { Image, Text, View } from "react-native"
import { adsStyles } from './styled'
import ArrowIcon from '../../assets/icon/arrow-icon.png'


const AdsTag = ({ item, index }) => {
  return (
    <View style={adsStyles.container} key={index}>
      <View style={adsStyles.textContain}>
        <Text style={adsStyles.body}>{item.body}</Text>
        <View style={adsStyles.actionContain}>
          <Text style={adsStyles.action}>
            {item.title}
          </Text>
          <Image style={adsStyles.arrowIcon} source={ArrowIcon} />
        </View>
      </View>
      <Image
        source={item.imgUrl}
        style={adsStyles.image}
      />
    </View>
  )
}



export default AdsTag
