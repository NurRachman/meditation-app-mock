import React from "react";
import { Text as RNText, TextProps } from 'react-native';
import { twMerge as tw } from 'tailwind-merge';

interface Props extends TextProps {

}

export const Text = ({ children, ...props }: Props) => {
  return (
    <RNText
      className={tw('text-sm text-text-black font-helveticaNeue font-normal', props.className)}
      {...props}>
      {children}
    </RNText>
  )
};