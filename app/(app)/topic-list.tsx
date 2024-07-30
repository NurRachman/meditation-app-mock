import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from "@/ui";
import { useRouter } from "expo-router";
import React from "react";
import { twMerge as tw } from 'tailwind-merge';

const items = [
  {
    label: 'Reduce Stress',
    textColor: '#FFECCC',
    bgColor: '#808AFF',
    illustration: require('../../assets/images/illustration/illustration-reduce-stress.png'),
    illustrationStyle: 'w-[164px] h-[146px] mt-[-4px]'
  },
  {
    label: 'Improve Performance',
    textColor: '#FEF9F3',
    bgColor: '#FA6E5A',
    illustration: require('../../assets/images/illustration/illustration-improve-performance.png'),
    illustrationStyle: 'w-[118px] h-[85px]'
  },
  {
    label: 'Increase Happiness',
    textColor: '#3F414E',
    bgColor: '#FEB18F',
    illustration: require('../../assets/images/illustration/illustration-increase-happiness.png'),
    illustrationStyle: 'w-full h-[97px]'
  },
  {
    label: 'Reduce Anxiety',
    textColor: '#3F414E',
    bgColor: '#FFCF86',
    illustration: require('../../assets/images/illustration/illustration-reduce-anxiety.png'),
    illustrationStyle: 'w-[139px] h-[122px]'
  },
  {
    label: 'Personal\nGrowth',
    textColor: '#FFECCC',
    bgColor: '#6CB28E',
    illustration: require('../../assets/images/illustration/illustration-personal-growth.png'),
    illustrationStyle: 'w-[176px] h-[114px] mt-[10px]'
  },
  {
    label: 'Better Sleep',
    textColor: '#EBEAEC',
    bgColor: '#3F414E',
    illustration: require('../../assets/images/illustration/illustration-better-sleep.png'),
    illustrationStyle: 'w-full h-[86px] mt-[10px]'
  }
];

export default function TopicList() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white">
      <Image
        className="absolute w-full h-full bottom-[-107]"
        source={require('../../assets/images/topic-frame.png')}
        contentFit="contain"
      />
      <SafeAreaView className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
          <View>
            <Text variant="medium" className="text-2xl text-[28px] mt-[75px]">
              {`What Brings you\n`}
              <Text className="text-2xl text-[28px]">to Silent Moon?</Text>
            </Text>
            <Text className="mt-[10px] text-text-grey text-xl">choose a topic to focuse on:</Text>

            <View
              className="flex-row flex-wrap items-start justify-center mt-[31px]"
              style={{ gap: 20 }}>
              {items.map((value, index) => {
                const isLarge = index % 4 === 0 || index % 4 === 3;
                const previousIsSmall = index > 0 && (index - 1) % 4 !== 0 && (index - 1) % 4 !== 3;
                const cardSize = isLarge ? 'h-[210px]' : 'h-[167px]';
                return (
                  <Pressable
                    key={`topic-item-${index}`}
                    className={tw(
                      `rounded-[10px] pb-[20px] overflow-hidden`,
                      cardSize,
                      ((isLarge && previousIsSmall) || index > 3) ? 'top-[-43px]' : ''
                    )}
                    style={{ backgroundColor: value.bgColor, width: '47%' }}
                    onPress={() => router.push('schedule')}>
                    <View className="flex-1 w-full items-center">
                      <Image source={value.illustration} className={value.illustrationStyle} contentFit="contain" />
                    </View>
                    <Text variant="bold" className="text-lg mx-[15px] " style={{ color: value.textColor }}>{value.label}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  )
}