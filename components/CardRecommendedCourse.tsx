import { Button, Image, Text, View } from "@/ui";
import { ImageSource } from "expo-image";
import React from "react";

interface Props {
  category: string;
  bgColor: string;
  duration: string;
  image: ImageSource;
}

export default function CardRecommendedCourse(props: Props) {
  return (
    <View className="w-[162px]">
      <View
        className="w-[162px] h-[133px] rounded-[10px] overflow-hidden"
        style={{ backgroundColor: props.bgColor }}
      >
        <Image
          source={props.image}
          className="w-full h-full"
          contentFit="contain"
        />
      </View>

      <Text variant="bold" className="mt-[10px] text-lg">{props.category}</Text>
      <Text variant="medium" className="text-sm text-[11px] text-text-grey tracking-widest">{props.duration}</Text>
    </View>
  );
}
