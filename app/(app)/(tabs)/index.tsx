import CardCourses from "@/components/CardCourses";
import CardRecommendedCourse from "@/components/CardRecommendedCourse";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
  colors,
} from "@/ui";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const recommendations = [
  {
    category: 'Focus',
    duration: 'MEDITATION • 3-10 MIN',
    image: require('../../../assets/images/illustration/illustration-focus.png'),
    bgColor: '#AED4BF',
  },
  {
    category: 'Happiness',
    duration: 'MEDITATION • 3-10 MIN',
    image: require('../../../assets/images/illustration/illustration-happiness.png'),
    bgColor: '#FAD9A1',
  },
  {
    category: 'Focus',
    duration: 'MEDITATION • 3-10 MIN',
    image: require('../../../assets/images/illustration/illustration-focus.png'),
    bgColor: '#AED4BF',
  },
  {
    category: 'Happiness',
    duration: 'MEDITATION • 3-10 MIN',
    image: require('../../../assets/images/illustration/illustration-happiness.png'),
    bgColor: '#FAD9A1',
  },
]

export default function Home() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View className="px-[20px]">
        <Image
          className="w-[168px] h-[30px] self-center mt-[30px]"
          source={require("../../../assets/images/logo/logo-silent-moon.png")}
          contentFit="contain"
        />
        <Text variant="bold" className="text-xl text-[26px] mt-[40px]">
          Good Morning, Rachman
        </Text>
        <Text className="text-text-grey text-xl mt-[10px]">
          We Wish you have a good day
        </Text>

        <View className="flex-row justify-between mt-[30px]">
          <CardCourses
            id={1}
            category="Basics"
            type="Course"
            duration="3-10 MIN"
            bgColor={colors.primary}
            btnColor={colors.border.grey}
            btnTextColor={colors.text.black}
            categoryTextColor={colors.text.blanchedAlmond}
            typeTextColor={colors.text.champagne}
            image={require("../../../assets/images/illustration/illustration-basic-course.png")}
          />
          <CardCourses
            id={2}
            category="Relaxation"
            type="Music"
            duration="3-10 MIN"
            bgColor={colors.topaz}
            btnColor={colors.arsenic}
            btnTextColor={colors.white}
            categoryTextColor={colors.arsenic}
            typeTextColor={colors.text.darkSilver}
            image={require("../../../assets/images/illustration/illustration-relaxation.png")}
          />
        </View>

        <ImageBackground
          source={require("../../../assets/images/banner-frame.png")}
          className="w-full h-[95px] rounded-[10px] mt-[20px] overflow-hidden bg-onyx px-[30px] flex-row items-center justify-between"
        >
          <View>
            <Text variant="bold" className="text-white text-lg">
              Daily Thought
            </Text>
            <Text variant="medium" className="text-white text-xs">
              MEDITATION • 3-10 MIN
            </Text>
          </View>

          <Pressable className="w-[40px] h-[40px] rounded-[20px] bg-white items-center justify-center">
            <MaterialCommunityIcons
              name="play"
              size={24}
              color={colors.text.black}
            />
          </Pressable>
        </ImageBackground>

        <Text variant="medium" className="text-2xl mt-[40px]">Recommended for you</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row mt-[20px] px-[20px]"
        contentContainerStyle={{ gap: 20, paddingRight: 40 }}>
        {recommendations.map((value, index) => (
          <CardRecommendedCourse
            key={`recommendation-${index}`}
            bgColor={value.bgColor}
            category={value.category}
            image={value.image}
            duration={value.duration}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}
