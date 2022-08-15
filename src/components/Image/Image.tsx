import React, { forwardRef, FC } from 'react';
import { Image as NativeImage } from 'react-native';
import type { IImageProps } from './types';
import { useComponent } from '../../core/ComponentsProvider';

export const ImageDefault = forwardRef((props: IImageProps, ref: any) => {
    return <NativeImage ref={ref} {...props} />;
});

const Image: FC<IImageProps> = () => {
    return useComponent('Image');
};

export default Image;
