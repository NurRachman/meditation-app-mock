import React, { useState } from "react";
import { Button, Checkbox, Pressable, SafeAreaView, ScrollView, Text, View, colors } from '@/ui'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white pt-[20px] pb-[50px] px-[20px] items-center">
      <Pressable className="w-[55px] h-[55px] rounded-[55px] border justify-center items-center self-start border-border-grey" onPress={router.back}>
        <MaterialCommunityIcons name="arrow-left" size={24} />
      </Pressable>

      <ScrollView className="pt-[28px] w-full" contentContainerStyle={{ alignItems: 'center' }}>
        <Text className="font-bold leading-7 text-[28px]">Create your account </Text>
        <Button className="bg-fadedBlue mt-[33px] px-[30px]">
          <View className="w-[24px] h-[24px] bg-text-grey absolute left-[30px] rounded-[8px]" />
          <Text className="text-white tracking-widest">CONTINUE WITH FACEBOOK</Text>
        </Button>
        <Button variant="outline" className="mt-[20px] px-[30px]">
          <View className="w-[24px] h-[24px] bg-text-grey absolute left-[30px] rounded-[8px]" />
          <Text className="tracking-widest">CONTINUE WITH GOOGLE</Text>
        </Button>

        <Text className="mt-[40px] tracking-widest text-text-grey font-bold">OR LOG IN WITH EMAIL</Text>
        <View className="flex-row mt-[20px] items-center">
          <Text className="tracking-widest text-text-grey">i have read the <Text className="text-primary font-bold">Privace Policy</Text></Text>
          <View className="flex-1" />
          <Pressable className="w-[24px] h-[24px] border-text-grey border-2 rounded items-center justify-center" >
            <MaterialCommunityIcons name="check-bold" size={18} color={colors.text.grey} />
          </Pressable>
          <Checkbox checked={checked} onChange={setChecked} />
        </View>
        <Button label="GET STARTED" className="mt-[32px]" />
      </ScrollView>
    </SafeAreaView>
  )
}