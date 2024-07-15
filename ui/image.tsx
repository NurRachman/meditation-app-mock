import React from "react";
import { Image as EXImage, ImageBackground as EXImageBackground } from 'expo-image';
import type { ImageProps, ImageBackgroundProps } from 'expo-image'

interface IimageProps extends ImageProps { }

interface IimageBackgroundProps extends ImageBackgroundProps { }

export const Image = ({
  placeholder = 'L6PZfSi_.AyE_3t7t7R**0o#DgR4',
  ...props
}: IimageProps) => {
  return (
    <EXImage placeholder={placeholder} {...props} />
  )
};

export const preloadImages = (sources: string[]) => {
  EXImage.prefetch(sources);
};

export const ImageBackground = ({
  placeholder = 'L6PZfSi_.AyE_3t7t7R**0o#DgR4',
  ...props
}: IimageBackgroundProps) => {
  return (
    <EXImageBackground placeholder={placeholder} {...props} />
  )
};