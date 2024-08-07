import React, { useEffect } from "react";
import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import { SplashScreen, Stack, useNavigationContainerRef } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    'HelveticaNeueThin': require('../assets/fonts/HelveticaNeueThin.otf'),
    'HelveticaNeueBold': require('../assets/fonts/HelveticaNeueBold.otf'),
    'HelveticaNeueLight': require('../assets/fonts/HelveticaNeueLight.otf'),
    'HelveticaNeueMedium': require('../assets/fonts/HelveticaNeueMedium.otf'),
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
      <Stack screenOptions={{ headerShown: false }} />
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
