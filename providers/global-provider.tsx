import { type ReactNode, createContext, useContext } from 'react';

import { getCurrentUser } from '@/lib/appwrite';
import { useAppwrite } from '@/lib/useAppwrite';

type User = {
  $id: string;
  name: string;
  email: string;
  avatar: string;
};

type GlobalContextType = {
  isLoggedIn: boolean;
  user: User | null;
  isLoading: boolean;
  refetch: (params?: Record<string, string | number>) => Promise<void>;
};

const GlobalContext = createContext<GlobalContextType>({
  isLoggedIn: false,
  user: null,
  isLoading: false,
  refetch: async () => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: user,
    refetch,
    isLoading,
  } = useAppwrite({
    fn: getCurrentUser,
  });

  const isLoggedIn = !!user;

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        user: user as User | null,
        isLoading,
        refetch: (params?: Record<string, string | number>) =>
          refetch(params || {}),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
