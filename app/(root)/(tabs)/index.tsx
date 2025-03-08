import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';
import { useGlobalContext } from '@/providers/global-provider';

export default function HomeScreen() {
  const { isLoggedIn, user } = useGlobalContext();
  return (
    <ScrollView className="flex-1 gap-3 m-4">
      <Text className="text-2xl font-rubik">Real Estate</Text>

      {isLoggedIn && user && (
        <View className="flex-col flex-1 gap-3">
          <Text className="text-2xl font-rubik">Welcome, {user.name}</Text>
        </View>
      )}

      <View className="flex-col flex-1 gap-3">
        <Link href="/login" className="p-4 rounded-md bg-primary-300">
          <Text className="text-white">Sign In</Text>
        </Link>
        <Link href="/explorer" className="p-4 rounded-md bg-primary-300">
          <Text className="text-white">Explorer</Text>
        </Link>
        <Link href="/profile" className="p-4 rounded-md bg-primary-300">
          <Text className="text-white">Profile</Text>
        </Link>
      </View>
    </ScrollView>
  );
}
