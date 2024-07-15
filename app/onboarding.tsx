import React from "react";
import { Button, Image, ImageBackground, Text, View } from "@/ui";
import { useRouter } from "expo-router";

export default function Onboarding() {
  const router = useRouter();

  function onNavigateToSignUp() {
    router.navigate("/sign-up");
  }

  return (
    <View className="flex-1 bg-white">
      <ImageBackground
        source={require("../assets/images/onboarding-frame.png")}
        className="w-full h-3/5 justify-center"
        contentFit="cover"
      >
        <Image
          className="w-[300px] h-[220px] self-center"
          source={require("../assets/images/onboarding.png")}
          contentFit="cover"
        />
      </ImageBackground>

      <View className="px-[20px] py-[30px] items-center flex-1">
        <Text className="font-bold text-3xl">We are what we do</Text>
        <Text className="mt-[15px] text-base text-text-grey text-center">
          {"Thousand of people are usign silent moon for smalls meditation "}
        </Text>

        <View className="flex-1 mt-[24px] justify-end w-full">
          <Button label="SIGN UP" onPress={onNavigateToSignUp} />
          <Text className="text-sm tracking-widest font-bold text-text-grey self-center mt-[20px]">
            {"ALREADY HAVE AN ACCOUNT? "}
            <Text
              className="text-primary font-bold"
              onPress={onNavigateToSignUp}
            >
              LOG IN
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
