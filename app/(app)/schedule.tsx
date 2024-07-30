import { WheelPicker } from "@/components/WheelPicker";
import { Button, Pressable, SafeAreaView, ScrollView, Text, View } from "@/ui";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { tv } from "tailwind-variants";

const days = ["SU", "M", "T", "W", "TH", "F", "S"];
const hours = Array.from({ length: 12 }, (_, i) => i + 1);
const minutes = Array.from({ length: 60 }, (_, i) => i);
const periods = ["AM", "PM"];
const scheduleVariant = tv({
  slots: {
    base: "bg-arsenic",
    text: "text-white",
  },
  variants: {
    isActive: {
      false: {
        base: "bg-white border-[1px] border-text-grey",
        text: "text-text-grey",
      },
    },
  },
});
const ScheduleItem = ({
  label,
  onPress,
  isActive = false,
}: {
  label: string;
  isActive?: boolean;
  onPress: VoidFunction;
}) => {
  const styles = useMemo(() => {
    return scheduleVariant({ isActive });
  }, [isActive]);
  return (
    <Pressable onPress={onPress}>
      <View
        className={styles.base({
          className:
            "w-[40px] h-[40px] rounded-[20px] items-center justify-center",
        })}
      >
        <Text variant="medium" className={styles.text()}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export default function Schedule() {
  const router = useRouter();
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const onSelectDay = (val: string) => {
    const tempDays = [...selectedDays];
    const findIndex = tempDays.indexOf(val);
    if (findIndex === -1) {
      tempDays.push(val);
    } else {
      tempDays.splice(findIndex, 1);
    }

    setSelectedDays(tempDays);
  };

  const onNextPage = () => {
    router.push("(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <Text
          variant="bold"
          className="mt-[75px] text-2xl"
        >{`What time would you\nlike to meditate?`}</Text>
        <Text className="mt-[15px] text-text-grey text-base pr-[20px]">
          Any time you can choose but We recommend first thing in th morning.
        </Text>

        <View className="flex-row justify-center w-full h-[212px] rounded-[20px] bg-cultured mt-[30px] px-[12px] py-[10px]">
          {/* <View className="absolute w-full h-[45px] top-[106px] border-y-[1px] border-border-grey2" /> */}
          <WheelPicker
            key={`hours`}
            pickerData={hours}
            onValueChange={console.log}
          />
          <WheelPicker
            key={`minute`}
            pickerData={minutes}
            onValueChange={console.log}
          />
          <WheelPicker
            key={`period`}
            pickerData={periods}
            onValueChange={console.log}
          />
        </View>

        <Text
          variant="bold"
          className="mt-[30px] text-2xl"
        >{`Which day would you\nlike to meditate?`}</Text>
        <Text className="mt-[15px] text-text-grey text-base pr-[20px]">
          Everyday is best, but we recommend picking at least five.
        </Text>

        <View
          className="flex-row items-center justify-center my-[40px]"
          style={{ gap: 14 }}
        >
          {days.map((value, index) => (
            <ScheduleItem
              key={`day-${index}`}
              isActive={selectedDays.includes(value)}
              label={value}
              onPress={() => onSelectDay(value)}
            />
          ))}
        </View>

        <Button label="SAVE" onPress={onNextPage} />
        <Button
          variant="outline"
          className="mt-[16px] border-0"
          label="NO THANKS"
          onPress={onNextPage}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
