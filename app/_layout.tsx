import 'react-native-reanimated';
import '@/global.css';

import * as SplashScreen from 'expo-splash-screen';

import { GlobalProvider } from '@/providers/global-provider';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Rubik_Bold: require('@/assets/fonts/Rubik-Bold.ttf'),
    Rubik_ExtraBold: require('@/assets/fonts/Rubik-ExtraBold.ttf'),
    Rubik_Light: require('@/assets/fonts/Rubik-Light.ttf'),
    Rubik_Medium: require('@/assets/fonts/Rubik-Medium.ttf'),
    Rubik_Regular: require('@/assets/fonts/Rubik-Regular.ttf'),
    Rubik_SemiBold: require('@/assets/fonts/Rubik-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </GlobalProvider>
  );
}
