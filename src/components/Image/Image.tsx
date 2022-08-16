import React, { forwardRef, FC } from 'react';
import { Image as NativeImage } from 'react-native';
import type { IImageProps } from './types';
import { ConsumeComponents } from '../../core/ComponentsProvider';

export const ImageDefault = forwardRef((props: IImageProps, ref: any) => {
    return <NativeImage ref={ref} {...props} />;
});

const ImageComponent: FC<IImageProps> = props => {
    return <ConsumeComponents>{({ Image }) => <Image {...props} />}</ConsumeComponents>;
};

export default ImageComponent;
