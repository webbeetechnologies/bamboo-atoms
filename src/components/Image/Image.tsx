import React, { memo, forwardRef } from 'react';
import { Image as NativeImage } from 'react-native';
import type { IImageProps } from './types';

const Image = (props: IImageProps, ref: any) => {
    return <NativeImage ref={ref} {...props} />;
};

export default memo(forwardRef(Image));
