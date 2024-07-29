import { Button, Image, ImageBackground, Text, View } from "@/ui";
import { useRouter } from "expo-router";
import React from "react";

export default function Index() {
  const router = useRouter();

  function onNavigateToSignUp() {
    router.navigate("/sign-up");
  }

  return (
    <View className="flex-1 bg-white">
      <Image
        className="w-[168px] h-[30px] self-center absolute z-10 top-[100px]"
        source={require('../assets/images/logo/logo-silent-moon.png')}
        contentFit="contain" />
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

      <View className="px-[20px] py-[30px] items-center flex-1 bg-white">
        <Text className="text-3xl" variant="bold" >We are what we do</Text>
        <Text className="mt-[15px] px-[20px] text-base text-text-grey text-center" variant="thin">
          {"Thousand of people are usign silent moon for smalls meditation "}
        </Text>

        <View className="flex-1 mt-[24px] mb-[24px] justify-end w-full">
          <Button label="SIGN UP" onPress={onNavigateToSignUp} />
          <Text variant="medium" className="tracking-widest text-text-grey self-center mt-[20px]">
            {"ALREADY HAVE AN ACCOUNT? "}
            <Text
              variant="medium"
              className="text-primary"
              onPress={onNavigateToSignUp}
            >
              LOG IN
            </Text>
          </Text>
        </View>
      </View>
    </View>
  )
}