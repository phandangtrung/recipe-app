import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyled } from './globalStyled';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

import AdsSlide from './pages/AdsSlide';
import Login from './pages/Login';
import Banner from './pages/Banner';
import Welcome from './pages/Welcome';
import SignUp from './pages/SignUp';
import QuestionScreen from './pages/QuestionScreen';
import Home from './pages/Home';

export default function App() {
  const Stack = createStackNavigator();

  SplashScreen.preventAutoHideAsync();
  let [fontsLoaded] = useFonts({
    'Pacifico-Regular': require('./assets/fonts/Pacifico-Regular.ttf'),
    'Playfair-Regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
    'Playfair-Black': require('./assets/fonts/PlayfairDisplay-Black.ttf'),
    'Mulish-Semi': require('./assets/fonts/Mulish-SemiBold.ttf'),
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <View style={globalStyled.wrapper} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AdsSlide" options={{ headerShown: false }} component={AdsSlide} />
          <Stack.Screen name="Banner" options={{ headerShown: false }} component={Banner} /> 
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
          <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome} />
          <Stack.Screen name="Question" options={{ headerShown: false }} component={QuestionScreen} />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}