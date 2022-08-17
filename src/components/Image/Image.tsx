import React, { forwardRef, memo } from 'react';
import { Image as NativeImage } from 'react-native';
import type { IImageProps } from './types';

export const Image = (props: IImageProps, ref: any) => {
    return <NativeImage ref={ref} {...props} />;
};

export default memo(forwardRef(Image));
