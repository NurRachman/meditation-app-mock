import React, { forwardRef, useCallback, useMemo, useState } from "react";
import { TextInput as RNTextInput, TouchableWithoutFeedback, View } from "react-native";
import type { TextInput, TextInputProps } from 'react-native';
import { tv } from "tailwind-variants";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { twMerge as tw } from 'tailwind-merge';
import colors from "./colors";

const inputVariant = tv({
  slots: {
    container: 'w-full min-h-[54px] px-[20] bg-flashWhite rounded-[15px]',
  },
  variants: {
    focused: {
      true: {
        container: 'bg-gainsboro',
      },
    },
    error: {
      true: {
        container: 'border-[1px] border-classicRed px-[19]'
      },
    },
    disabled: {
      true: {
        container: 'text-text-mediumGray',
      }
    },
  },
})

interface Props extends TextInputProps {
  error?: boolean;
  disabled?: boolean;
  password?: boolean;
}

export const Input = forwardRef<TextInput, Props>((props, ref) => {
  const { error = false, password = false, className, style, ...inputProps } = props;

  const [isFocussed, setIsFocussed] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(password);
  const onBlur = useCallback(() => setIsFocussed(false), []);
  const onFocus = useCallback(() => setIsFocussed(true), []);

  const styles = useMemo(
    () =>
      inputVariant({
        error: error,
        focused: isFocussed,
        disabled: props?.disabled,
      }),
    [isFocussed, error, props.disabled]
  );

  return (
    <View className={tw('flex-row', className)} style={style}>
      <RNTextInput
        ref={ref}
        onBlur={onBlur}
        onFocus={onFocus}
        className={styles.container({ className: password ? 'pr-[48px]' : '' })}
        numberOfLines={1}
        editable={!props.disabled}
        focusable={!props.disabled}
        secureTextEntry={secureTextEntry}
        {...inputProps} />

      {password && (
        <View className="absolute right-4 self-center">
          <TouchableWithoutFeedback onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <MaterialCommunityIcons name={secureTextEntry ? "eye-off-outline" : "eye-outline"} size={24} color={colors.text.black} />
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  )
})