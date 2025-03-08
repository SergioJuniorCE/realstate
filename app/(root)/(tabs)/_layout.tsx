import { Image, Text, View } from 'react-native';

import React from 'react';
import { Tabs } from 'expo-router';
import icons from '@/constants/icons';

const TabIcon = ({
  focused,
  icon,
  label,
}: {
  focused: boolean;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  icon: any;
  label: string;
}) => {
  return (
    <View>
      <Image source={icon} />
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          borderTopColor: '#0061FF1A',
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} focused={focused} label="Home" />
          ),
        }}
      />
    </Tabs>
  );
}
