import React, { useEffect } from "react";
import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import { SplashScreen, Stack, useNavigationContainerRef } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    helveticaNeue: require('../assets/fonts/HelveticaNeue.ttf'),
  });
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return RootLayoutNav();
}

function RootLayoutNav() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GestureHandlerRootView className="flex-1">
      <StatusBar style="dark" />
      {children}
    </GestureHandlerRootView>
  )
}
