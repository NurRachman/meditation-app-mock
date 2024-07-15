import { MotiView } from "moti";
import React, { useCallback } from "react";
import { Pressable, View, type PressableProps } from 'react-native';
import colros from '@/ui/colors';
import { twMerge as tw } from 'tailwind-merge';
import colors from "@/ui/colors";
import Svg, { Path } from 'react-native-svg';

const SIZE = 20;
const WIDTH = 50;
const HEIGHT = 28;
const THUMB_HEIGHT = 22;
const THUMB_WIDTH = 22;
const THUMB_OFFSET = 4;

export interface RootProps extends Omit<PressableProps, 'onPress'> {
  onChange: (checked: boolean) => void;
  checked?: boolean;
  className?: string;
}

export type IconProps = {
  checked: boolean;
}

export const Root = ({
  checked = false,
  children,
  onChange,
  className,
  disabled,
  ...props
}: RootProps) => {
  const handleChange = useCallback(() => {
    onChange(!checked);
  }, [checked, onChange]);

  return (
    <Pressable
      className={tw('flex-row items-center', className, disabled ? 'opacity-50' : '')}
      disabled={disabled}
      accessibilityState={{ checked }}
      onPress={handleChange}
      {...props}>
      {children}
    </Pressable>
  )
};

const CheckboxIcon = ({ checked = false }: IconProps) => {
  const color = checked ? colros.primary : colors.text.grey;
  return (
    <MotiView
      style={{
        height: SIZE,
        width: SIZE,
        borderColor: color,
      }}
      className="items-center justify-center rounded-[5px] border-2"
      from={{ backgroundColor: 'transparent', borderColor: '#CCCFD6' }}
      animate={{
        backgroundColor: checked ? color : 'transparent',
        borderColor: color,
      }}
      transition={{
        backgroundColor: { type: 'timing', duration: 100 },
        borderColor: { type: 'timing', duration: 100 },
      }}
    >
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: checked ? 1 : 0 }}
        transition={{ opacity: { type: 'timing', duration: 100 } }}
      >
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="m16.726 7-.64.633c-2.207 2.212-3.878 4.047-5.955 6.158l-2.28-1.928-.69-.584L6 12.66l.683.577 2.928 2.477.633.535.591-.584c2.421-2.426 4.148-4.367 6.532-6.756l.633-.64L16.726 7Z"
            fill="#fff"
          />
        </Svg>
      </MotiView>
    </MotiView>
  )
}

const CheckboxRoot = ({ checked = false, children, ...props }: RootProps) => {
  return (
    <Root checked={checked} accessibilityRole="checkbox" {...props}>
      {children}
    </Root>
  )
};

const CheckBoxBase = ({ checked = false, ...props }: RootProps) => {
  return (
    <CheckboxRoot checked={checked} {...props}>
      <CheckboxIcon checked={checked} />
    </CheckboxRoot>
  )
};

export const Checkbox = Object.assign(CheckBoxBase, {
  Icon: CheckboxIcon,
  Root: CheckboxRoot,
})