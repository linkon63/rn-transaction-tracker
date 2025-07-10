import { Stack } from "expo-router";
import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Text } from "react-native";
import {StatusBar} from "expo-status-bar";
export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
      <StatusBar style="dark" />
    </ClerkProvider>
  );
  // working with steps
  // return <SafeScreen>
  //   <Stack
  //     screenOptions={{
  //       headerShown: false,
  //     }}
  //   />
  // </SafeScreen>
  // return <Stack />;
}
