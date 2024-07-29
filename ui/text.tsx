import React, { useMemo } from "react";
import { Text as RNText, TextProps } from 'react-native';
import { twMerge as tw } from 'tailwind-merge';
import { tv, VariantProps } from "tailwind-variants";

const textWeightVariant = tv({
  slots: {
    base: 'font-helvetica-neue-light',
  },
  variants: {
    variant: {
      bold: {
        base: 'font-helvetica-neue-bold',
      },
      medium: {
        base: 'font-helvetica-neue-medium',
      },
      thin: {
        base: 'font-helvetica-neue-thin',
      },
      light: {
        base: 'font-helvetica-neue-light',
      },
    },
  }
})
type TextWeightVariant = VariantProps<typeof textWeightVariant>;
interface Props extends TextProps, TextWeightVariant {

}

export const Text = ({ children, className, variant = 'light', ...props }: Props) => {
  const styles = useMemo(() => {
    return textWeightVariant({ variant });
  }, [variant]);

  return (
    <RNText
      className={tw('text-sm text-text-black', styles.base({ className }))}
      {...props}>
      {children}
    </RNText>
  )
};