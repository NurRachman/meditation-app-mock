import React, { useState } from "react";
import { Button, Checkbox, Image, Pressable, SafeAreaView, ScrollView, Text, View, colors } from '@/ui'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigationContainerRef, useRouter } from "expo-router";
import { Input } from "@/ui/input";
import { StackActions } from "@react-navigation/native";

export default function SignUp() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const rootNavigation = useNavigationContainerRef();

  function onNavigateToWelcome() {
    rootNavigation.dispatch(StackActions.popToTop());
    router.replace('welcome');
  }

  return (
    <View className="flex-1 bg-white">

      <Image
        className="w-full h-[328px] self-center absolute"
        source={require("../assets/images/auth-frame.png")}
        contentFit="cover" />

      <SafeAreaView className="flex-1 pt-[20px] px-[20px] items-center">
        <Pressable className="w-[45px] h-[45px] rounded-[55px] border justify-center items-center self-start border-border-grey" onPress={router.back}>
          <MaterialCommunityIcons name="arrow-left" size={24} />
        </Pressable>

        <ScrollView showsVerticalScrollIndicator={false} className="pt-[28px] w-full" contentContainerStyle={{ alignItems: 'center' }}>
          <Text variant="bold" className="leading-7 text-[28px]">Create your account </Text>
          <Button className="bg-fadedBlue mt-[33px] px-[30px]">
            <Image
              className="w-[24px] h-[24px] absolute left-[30px]"
              source={require('../assets/images/logo/logo-fb.png')}
              contentFit="contain" />
            <Text variant="light" className="text-white tracking-widest">CONTINUE WITH FACEBOOK</Text>
          </Button>
          <Button variant="outline" className="mt-[20px] px-[30px] bg-white">
            <Image
              className="w-[24px] h-[24px] absolute left-[30px]"
              source={require('../assets/images/logo/logo-google.png')}
              contentFit="contain" />
            <Text className="tracking-widest">CONTINUE WITH GOOGLE</Text>
          </Button>

          <Text variant="bold" className="mt-[40px] tracking-widest text-text-grey">OR LOG IN WITH EMAIL</Text>

          <Input placeholder="Name" className="mt-[40px]" />
          <Input placeholder="Email address" className="mt-[20px]" keyboardType="email-address" />
          <Input password placeholder="Password" className="mt-[20px]" />

          <View className="flex-row mt-[20px] items-center">
            <Text variant="medium" className="text-text-grey tracking-wider">i have read the <Text variant="medium" className="text-primary">Privace Policy</Text></Text>
            <View className="flex-1" />
            <Checkbox checked={checked} onChange={setChecked} />
          </View>
          <Button label="GET STARTED" className="mt-[32px]" onPress={onNavigateToWelcome} />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}