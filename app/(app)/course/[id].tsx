import { colors, FlatList, ImageBackground, Pressable, ScrollView, Text, View } from "@/ui";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { twMerge as tw } from 'tailwind-merge'
import { getStatusBarHeight } from '@/ui/react-native-iphone-screen-helper'
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const tabs = [
  {
    label: 'MALE VOICE',
    key: 'male-voice',
  },
  {
    label: 'FEMALE VOICE',
    key: 'female-voice',
  }
]

const voices = [
  { label: 'Focus Attention', duration: '10 MIN' },
  { label: 'Body Scan', duration: '5 MIN' },
  { label: 'Making Happiness', duration: '3 MIN' },
  { label: 'Focus Attention', duration: '10 MIN' },
  { label: 'Body Scan', duration: '5 MIN' },
  { label: 'Making Happiness', duration: '3 MIN' },
  { label: 'Focus Attention', duration: '10 MIN' },
  { label: 'Body Scan', duration: '5 MIN' },
  { label: 'Making Happiness', duration: '3 MIN' },
  { label: 'Focus Attention', duration: '10 MIN' },
  { label: 'Body Scan', duration: '5 MIN' },
  { label: 'Making Happiness', duration: '3 MIN' },
  { label: 'Focus Attention', duration: '10 MIN' },
  { label: 'Body Scan', duration: '5 MIN' },
  { label: 'Making Happiness', duration: '3 MIN' },
];

export default function Course() {
  const router = useRouter();
  const { category = '', type = '' } = useLocalSearchParams();
  const scrollY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolate(
      scrollY.value,
      [0, 300],
      [0, 1],
      'clamp',
    );

    return {
      backgroundColor: `rgba(255, 255, 255, ${backgroundColor})`,
    };
  });

  return (
    <View className="bg-white flex-1">
      <Animated.View className="flex-row items-center absolute z-10 w-full px-[20px] pb-[10px] bg-white" style={[{ paddingTop: getStatusBarHeight() }, animatedStyle]}>
        <Pressable className="w-[45px] h-[45px] rounded-[45px] justify-center items-center self-start bg-[#F2F2F2]" onPress={router.back}>
          <MaterialCommunityIcons name="arrow-left" size={24} />
        </Pressable>

        <View className="flex-row items-center flex-1 justify-end" style={{ gap: 15 }}>
          <Pressable className="w-[45px] h-[45px] rounded-[45px] justify-center items-center self-start bg-[#03174C80]" onPress={router.back}>
            <MaterialCommunityIcons name="heart-outline" size={24} color="#F2F2F2" />
          </Pressable>
          <Pressable className="w-[45px] h-[45px] rounded-[45px] justify-center items-center self-start bg-[#03174C80]" onPress={router.back}>
            <MaterialCommunityIcons name="progress-download" size={24} color="#F2F2F2" />
          </Pressable>
        </View>
      </Animated.View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white"
        contentContainerStyle={{ paddingBottom: 40 }}
        scrollEventThrottle={16}
        onScroll={(e) => {
          scrollY.value = e.nativeEvent.contentOffset.y;
        }}>
        <ImageBackground
          source={require('../../../assets/images/illustration/illustration-course-detail.png')}
          className="w-full h-[288px]"
          contentFit="scale-down" />
        <View className="px-[20px] mt-[30px]">
          <Text variant="bold" className="text-2xl text-[34px]">{category}</Text>
          <Text
            variant="medium"
            className="text-sm tracking-widest text-text-grey mt-[10px]">
            {type.toString().toUpperCase()}
          </Text>
          <Text
            variant="light"
            className="text-base mt-[20px] text-text-grey">
            Ease the mind into a restful night’s sleep  with
            these deep, amblent tones.
          </Text>

          <View className="flex-row items-center mt-[30px]" style={{ gap: 5 }}>
            <MaterialCommunityIcons name="cards-heart" size={20} color="#FF84A2" />
            <Text variant="medium" className="text-sm text-text-grey">24.234 Favorits</Text>
            <View className="w-[50px]" />
            <MaterialCommunityIcons name="headset" size={20} color="#7FD2F2" />
            <Text variant="medium" className="text-sm text-text-grey">34.234 Lestening</Text>
          </View>

          <Text variant="bold" className="text-xl mt-[40px]">Pick a Narrator</Text>
        </View>
        <View className="flex-row border-b border-[#E4E6FD] px-[20px] mt-[25px]" style={{ gap: 40 }}>
          {tabs.map((value, index) => {
            const focus = value.key === 'male-voice';
            return (
              <View key={`tab-${index}-${value.key}`} className="items-center">
                <Text variant="medium" className={tw("tracking-widest", focus ? 'text-primary' : 'text-text-grey')}>{value.label}</Text>
                {focus && (
                  <View className="mt-[10px] w-[45px] h-[2px] bg-primary rounded-[10px]" />
                )}
              </View>
            )
          })}
        </View>
        <FlatList
          scrollEnabled={false}
          data={voices}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          className="mt-[25px]"
          keyExtractor={(_item, index) => `voice-item-${index}`}
          renderItem={({ item: { duration, label }, index }) => {
            const focus = index === 0;
            return (
              <View className="flex-row items-center" style={{ gap: 20 }}>
                <View className={tw("w-[40px] h-[40px] rounded-[20px] justify-center items-center", focus ? 'bg-primary' : 'bg-white border-[1px] border-text-grey')}>
                  <MaterialCommunityIcons
                    name="play"
                    size={28}
                    color={focus ? "#F6F1FB" : colors.text.grey}
                  />
                </View>
                <View>
                  <Text variant="bold" className="text-base">{label}</Text>
                  <Text variant="medium" className="text-text-grey text-sm">{duration}</Text>
                </View>
              </View>
            )
          }}
          ItemSeparatorComponent={() => <View className="bg-[#ADB8D9] h-[1px] my-[20px] opacity-40 " />}
        />
      </ScrollView>

    </View>
  )
}