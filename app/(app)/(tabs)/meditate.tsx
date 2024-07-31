import SmallMenuItem from "@/components/SmallMenuItem";
import { colors, Image, ImageBackground, Pressable, ScrollView, Text, View } from "@/ui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { twMerge as tw } from 'tailwind-merge';

const meditateCategories = [
  { name: 'All', icon: require('../../../assets/svgs/icon_meditation_all.svg') },
  { name: 'My', icon: require('../../../assets/svgs/icon_love.svg') },
  { name: 'Anxious', icon: require('../../../assets/svgs/icon_sad.svg') },
  { name: 'Sleep', icon: require('../../../assets/svgs/icon_sleep.svg') },
  { name: 'Kids', icon: require('../../../assets/svgs/icon_kids.svg') },
];

const items = [
  {
    label: '7 Days of Calm',
    textColor: '#FFFFFF',
    illustration: require('../../../assets/images/illustration/illustration-meditate-1.png'),
    illustrationStyle: 'w-[164px] h-[146px] mt-[-4px]'
  },
  {
    label: 'Anxiet Release',
    textColor: '#FFFFFF',
    illustration: require('../../../assets/images/illustration/illustration-meditate-2.png'),
    illustrationStyle: 'w-[118px] h-[85px]'
  },
  {
    label: '7 Days of Calm',
    textColor: '#FFFFFF',
    illustration: require('../../../assets/images/illustration/illustration-meditate-3.png'),
    illustrationStyle: 'w-full h-[97px]'
  },
  {
    label: 'Anxiet Release',
    textColor: '#FFFFFF',
    illustration: require('../../../assets/images/illustration/illustration-meditate-4.png'),
    illustrationStyle: 'w-[139px] h-[122px]'
  }
];

export default function Meditate() {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-white flex-1">
      <Text variant="bold" className="text-2xl text-[28px] mt-[30px] self-center">Meditate</Text>
      <Text variant="light" className="text-base text-metalicSilver text-center px-[20px] mt-[15px]">we can learn how to recognize when our minds are doing their normal everyday acrobatics.</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-[34px]"
        contentContainerStyle={{ gap: 20, paddingHorizontal: 20 }}>
        {meditateCategories.map((value, index) => (
          <SmallMenuItem
            key={`meditate-category-item-${index}`}
            name={value.name}
            icon={value.icon}
            focus={activeCategory === index}
            onPress={() => {
              setActiveCategory(index);
            }} />
        ))}
      </ScrollView>

      <View className="px-[20px] mt-[30px]">
        <ImageBackground
          source={require("../../../assets/images/banner-meditation-frame.png")}
          className="w-full h-[95px] rounded-[10px] overflow-hidden px-[30px] flex-row items-center justify-between bg-[#ECD9CA]"
        >
          <View>
            <Text variant="bold" className="text-text-black text-lg">
              Daily Calm
            </Text>
            <Text variant="medium" className="text-[#5A6175] text-xs">
              APR • PAUSE PRACTICE
            </Text>
          </View>

          <Pressable className="w-[40px] h-[40px] rounded-[20px] bg-text-black items-center justify-center">
            <MaterialCommunityIcons
              name="play"
              size={24}
              color={colors.white}
            />
          </Pressable>
        </ImageBackground>
      </View>

      <View
        className="flex-row flex-wrap items-start justify-center mt-[20px] px-[20px]"
        style={{ gap: 20 }}>
        {items.map((value, index) => {
          const isLarge = index % 4 === 0 || index % 4 === 3;
          const previousIsSmall = index > 0 && (index - 1) % 4 !== 0 && (index - 1) % 4 !== 3;
          const cardSize = isLarge ? 'h-[210px]' : 'h-[167px]';
          return (
            <Pressable
              key={`topic-item-${index}`}
              className={tw(
                `rounded-[10px] overflow-hidden bg-red-200`,
                cardSize,
                ((isLarge && previousIsSmall) || index > 3) ? 'top-[-43px]' : ''
              )}
              style={{ width: '47%' }}>
              <ImageBackground className="w-full h-full justify-end pb-[16px]" source={value.illustration} contentFit="cover">
                <Text variant="bold" className="text-lg mx-[15px] " style={{ color: value.textColor }}>{value.label}</Text>
              </ImageBackground>
              {/* <View className="flex-1 w-full items-center">
                <Image source={value.illustration} className={value.illustrationStyle} contentFit="contain" />
              </View> */}
            </Pressable>
          );
        })}
      </View>
    </ScrollView >
  );
}
