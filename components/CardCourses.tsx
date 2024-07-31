import { Button, Image, Text, View } from "@/ui";
import { ImageSource } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";

interface Props {
  id: number;
  category: string;
  type: string;
  duration: string;
  bgColor: string;
  btnColor: string;
  btnTextColor: string;
  categoryTextColor: string;
  typeTextColor: string;
  image: ImageSource;
}

export default function CardCourses(props: Props) {
  const router = useRouter();

  return (
    <View
      className="w-[165px] min-h-[210px] rounded-[10px] bg-primary p-[15px] overflow-hidden"
      style={{ backgroundColor: props.bgColor }}
    >
      <Image
        source={props.image}
        className="absolute w-[120px] h-[105px] right-[-11px] top-[-11px]"
        contentFit="scale-down"
      />
      <View className="flex-1 justify-center">
        <Text
          variant="bold"
          className="text-text-blanchedAlmond text-xl"
          style={{ color: props.categoryTextColor }}
        >
          {props.category}
        </Text>
        <Text
          variant="medium"
          className="text-xs text-[11px] tracking-widest text-text-champagne"
          style={{ color: props.typeTextColor }}
        >
          {props.type.toUpperCase()}
        </Text>
      </View>
      <View className="flex-row absolute w-[165px] justify-between items-center bottom-0 p-[15px]">
        <Text
          variant="medium"
          className="text-border-grey text-xs text-[11px]"
          style={{ color: props.typeTextColor }}
        >
          {props.duration}
        </Text>
        <Button
          label="START"
          className="w-[70px] min-h-[35px] rounded-[25px]"
          textStyle={{ color: props.btnTextColor }}
          style={{ backgroundColor: props.btnColor }}
          onPress={() => {
            router.push({ pathname: `course/${props.id}`, params: { category: props.category, type: props.type } })
          }}
        />
      </View>
    </View>
  );
}
