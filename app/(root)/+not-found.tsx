import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-4">
        <Text>This screen doesn't exist.</Text>
        <Link href="/" className="bg-gray-500 p-4 rounded-md">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}