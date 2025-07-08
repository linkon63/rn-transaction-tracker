import { Stack } from "expo-router";
import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
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
