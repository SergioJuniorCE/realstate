import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import { Redirect } from 'expo-router';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/providers/global-provider';

export default function Login() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) {
    return <Redirect href="/" />;
  }

  const handleLogin = async () => {
    try {
      const session = await login();
      if (!session) {
        throw new Error('Failed to login');
      }
      return <Redirect href="/" />;
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to login');
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to Realstate
          </Text>
          <Text className="mt-2 text-3xl text-center font-rubik-bold text-black-300">
            Let's get you closer to {'\n'}
            <Text className="text-primary-300">your dream home</Text>
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="w-full gap-2 p-4 py-4 mt-5 bg-white rounded-full shadow-lg shadow-zinc-400"
          >
            <View className="flex-row items-center justify-center">
              <Image source={icons.google} className="w-6 h-6" />
              <Text className="ml-3 text-lg text-center text-black-300 font-rubik-medium">
                Sign in with google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
