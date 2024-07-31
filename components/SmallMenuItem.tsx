import { Image, Pressable, Text, View } from "@/ui";
import { ImageSource } from "expo-image";
import React from "react";
import { twMerge as tw } from 'tailwind-merge'

interface Props {
  name: string;
  icon: ImageSource;
  focus: boolean;
  onPress: () => void;
}

export default function SmallMenuItem(props: Props) {
  return (
    <Pressable onPress={props.onPress}>
      <View className="items-center w-[65px]">
        <View className={tw('w-[65px] h-[65px] rounded-[25px] items-center justify-center', props.focus ? 'bg-primary' : 'bg-metalicSilver')}>
          <Image
            className="w-[25px] h-[25px]"
            source={props.icon}
            contentFit="contain"
          // tintColor={focused ? colors.white : colors.metalicSilver}
          />
        </View>
        <Text variant="medium" className={tw("mt-[10px]", props.focus ? 'text-text-black' : 'text-metalicSilver')}>
          {props.name}
        </Text>
      </View>
    </Pressable>
  )
}