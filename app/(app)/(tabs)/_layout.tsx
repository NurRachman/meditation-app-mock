import { Colors } from "@/constants/Colors";
import { Image, Pressable, SafeAreaView, Text, View, colors } from "@/ui";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import type {} from "expo-router";
import React from "react";
import { tv } from "tailwind-variants";

const tabs = [
  {
    name: "index",
    title: "Home",
    tabIcon: require("../../../assets/svgs/tab/tab_home.svg"),
  },
  {
    name: "sleep",
    title: "Sleep",
    tabIcon: require("../../../assets/svgs/tab/tab_sleep.svg"),
  },
  {
    name: "meditate",
    title: "Meditate",
    tabIcon: require("../../../assets/svgs/tab/tab_meditation.svg"),
  },
  {
    name: "music",
    title: "Music",
    tabIcon: require("../../../assets/svgs/tab/tab_music.svg"),
  },
  {
    name: "profile",
    title: "Profile",
    tabIcon: require("../../../assets/svgs/tab/tab_profile.svg"),
  },
];
const tabVariant = tv({
  slots: {
    base: "bg-transparent",
    text: "text-metalicSilver",
  },
  variants: {
    focus: {
      true: {
        base: "rounded-[18px] bg-primary",
        text: "text-primary",
      },
    },
  },
});

export default function TabLayout() {
  return TabLayoutNav();
}

function TabLayoutNav() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        headerShown: false,
      }}
    >
      {tabs.map((value, index) => (
        <Tabs.Screen
          key={`tab-screen-${index}`}
          name={value.name}
          options={{ title: value.title }}
        />
      ))}
    </Tabs>
    </SafeAreaView>
  );
}

function TabBar(props: BottomTabBarProps) {
  const { state, navigation, descriptors } = props;
  return (
    <View className="flex-row items-center justify-between pt-[20px] bg-white px-[20px]">
      {state.routes.map((value, index) => {
        const focused = state.index === index;
        const styles = tabVariant({ focus: focused });
        const findTabs = tabs.find(
          (predicate) => predicate.name === value.name,
        );
        return (
          <Pressable
            key={`route-name-${index}`}
            className="flex-col w-[66px] h-[66px] items-center justify-center"
            onPress={() => navigation.navigate(value.name)}
          >
            <View
              className={styles.base({
                className: "h-[46px] w-[46px] items-center justify-center",
              })}
            >
              {findTabs && (
                <Image
                  className="w-[22px] h-[22px]"
                  source={findTabs.tabIcon}
                  contentFit="contain"
                  tintColor={focused ? colors.white : colors.metalicSilver}
                />
              )}
              {/* <Svgs.TabHome /> */}
            </View>
            <Text
              variant="medium"
              className={styles.text({ className: "mt-[5px]" })}
            >
              {findTabs?.title}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
