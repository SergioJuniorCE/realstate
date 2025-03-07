import * as Linking from 'expo-linking';

import { Account, Avatars, Client, OAuthProvider } from 'react-native-appwrite';

import { getEnv } from './getEnv';
import { openAuthSessionAsync } from 'expo-web-browser';

export const config = {
  platform: 'com.sjce.realstate',
  endpoint: getEnv('EXPO_PUBLIC_APPWRITE_ENDPOINT'),
  projectId: getEnv('EXPO_PUBLIC_APPWRITE_PROJECT_ID'),
};

export const client = new Client()
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login() {
  try {
    const redirectUrl = Linking.createURL('/');
    const response = account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUrl
    );
    if (!response) {
      throw new Error('Failed to create OAuth2 token');
    }
    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUrl
    );

    if (browserResult.type !== 'success') {
      throw new Error('Failed to open browser');
    }

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get('secret')?.toString();
    const userId = url.searchParams.get('userId')?.toString();

    if (!secret || !userId) {
      throw new Error('No secret or userId found');
    }

    const session = await account.createSession(userId, secret);

    if (!session) {
      throw new Error('Failed to create session');
    }

    return session;
  } catch (error) {
    console.error(error);
    return null;
  }
}
