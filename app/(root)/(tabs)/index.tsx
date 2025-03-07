import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text>Real Estate</Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 3,
        }}
      >
        <Link href="/sign-in" style={styles.button}>
          <Text>Sign In</Text>
        </Link>
        <Link href="/explorer" style={styles.button}>
          <Text>Explorer</Text>
        </Link>
        <Link href="/profile" style={styles.button}>
          <Text>Profile</Text>
        </Link>
        <Link href="/properties/123" style={styles.button}>
          <Text>Property 123</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    gap: 3,
    margin: 10,
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
});
