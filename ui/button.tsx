import React, { useMemo } from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  TextStyle,
} from "react-native";
import { VariantProps, tv } from "tailwind-variants";
import { Text } from "./text";
import colors from "./colors";

const buttonVariants = tv({
  slots: {
    base: "w-full min-h-[63px] bg-primary rounded-[38px] items-center justify-center",
    text: "text-white text-sm",
  },
  variants: {
    variant: {
      primary: {
        base: "bg-primary",
        text: "text-white text-sm",
      },
      outline: {
        base: "bg-transparent border-border-grey border",
        text: "text-sm text-text-black",
      },
    },
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;
interface Props extends ButtonVariants, Omit<PressableProps, "disabled"> {
  isLoading?: boolean;
  textClassName?: string;
  className?: string;
  label?: string;
  textStyle?: TextStyle;
}

export const Button = ({
  isLoading = false,
  variant = "primary",
  label = "",
  className,
  textClassName,
  children,
  textStyle,
  ...props
}: Props) => {
  const styles = useMemo(() => {
    return buttonVariants({ variant });
  }, [variant]);

  const buttonContent = useMemo(() => {
    if (isLoading) {
      return <ActivityIndicator color={colors.primary} />;
    } else if (children && typeof children != "string") {
      return children;
    }

    return (
      <Text
        variant="medium"
        className={styles.text({ className: textClassName })}
        style={textStyle}
      >
        {label}
      </Text>
    );
  }, [label, children, isLoading, styles, textStyle]);

  return (
    <Pressable className={styles.base({ className })} {...props}>
      {buttonContent}
    </Pressable>
  );
};
