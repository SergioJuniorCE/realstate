import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 gap-3 m-4">
      <Text className="text-2xl font-bold">Real Estate</Text>
      <View className="flex-1 flex-col gap-3">
        <Link href="/sign-in" className="bg-gray-500 p-4 rounded-md">
          <Text>Sign In</Text>
        </Link>
        <Link href="/explorer" className="bg-gray-500 p-4 rounded-md">
          <Text>Explorer</Text>
        </Link>
        <Link href="/profile" className="bg-gray-500 p-4 rounded-md">
          <Text>Profile</Text>
        </Link>
      </View>
    </ScrollView>
  );
}
