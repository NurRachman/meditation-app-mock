import { Button, Image, ImageBackground, SafeAreaView, Text, View } from "@/ui";
import { useNavigationContainerRef, useRouter } from "expo-router";
import React from "react";

export default function Welcome() {
  const router = useRouter();

  function onNavigateToTopic() {
    router.replace('(app)/topic-list');
  }


  return (
    <View className="flex-1 bg-primary">
      <Image
        className="w-[168px] h-[30px] self-center absolute z-10 top-[100px]"
        source={require('../assets/images/logo/logo-silent-moon2.png')}
        contentFit="contain" />

      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-end">
          <View className="px-[40px] items-center">
            <Text
              variant="bold"
              className="text-center text-2xl text-text-blanchedAlmond">
              {`Hi Afsar, Welcome\n`}
              <Text variant="light" className="text-2xl text-text-blanchedAlmond">to Silent Moon</Text>
            </Text>
            <Text variant="light" className="text-center text-base text-border-grey mt-[15px]">Explore the app, Find some peace of mind to prepare for meditation.</Text>
          </View>
        </View>
        <ImageBackground
          source={require('../assets/images/illustration/illustration-frame-welcome.png')}
          className="h-[492px] w-full"
          contentFit="contain">
          <Image
            source={require('../assets/images/illustration/illustration-welcome.png')}
            className="w-full h-[309px]"
            contentFit="contain" />
          <View className="px-[20px] mt-[-9px] bg-frenchSkyBlue flex-1 justify-end">
            <Button label="GET STARTED" textClassName="text-text-black" className="bg-border-grey" onPress={onNavigateToTopic} />
          </View>
        </ImageBackground>

      </SafeAreaView>

    </View>
  )
}