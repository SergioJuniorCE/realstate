import { Redirect, Slot } from 'expo-router';

import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from '@/providers/global-provider';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (isLoading) {
    return (
      <SafeAreaView className="items-center justify-center flex-1">
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return <Slot />;
}
