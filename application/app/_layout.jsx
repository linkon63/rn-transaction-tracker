import { Stack } from "expo-router";
import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Text, View } from "react-native";
import {StatusBar} from "expo-status-bar";
import "../global.css"

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={"pk_test_cmVsYXRlZC1tYXJtb3QtMzMuY2xlcmsuYWNjb3VudHMuZGV2JA"} tokenCache={tokenCache}>
      <SafeScreen>
        {/* <View> */}
          {/* <Text className="text-red-500">Global CSS</Text> */}
          <Slot />
        {/* </View> */}
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
