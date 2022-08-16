import React, { forwardRef } from 'react';
import { Image as NativeImage } from 'react-native';
import type { IImageProps } from './types';

export const Image = (props: IImageProps, ref: any) => {
    return <NativeImage ref={ref} {...props} />;
};

export default forwardRef(Image);
