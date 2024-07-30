import { colors, View } from "@/ui";
import React from "react";
import { Picker } from "react-native-wheel-pick";

interface Props {
  pickerData: number[] | string[];
  onValueChange: (value: string | number) => void;
}
export function WheelPicker({ pickerData, onValueChange }: Props) {
  return (
    <View>
      <Picker
        className="w-[100px] bg-transparent"
        pickerData={pickerData}
        selectedBackgroundColor={colors.border.grey2}
        textColor={colors.text.black}
        onValueChange={onValueChange}
      />
    </View>
  );
}
