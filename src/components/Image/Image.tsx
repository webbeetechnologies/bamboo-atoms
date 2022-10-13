import React, { forwardRef, memo } from 'react';
import { Image as NativeImage } from 'react-native';
import useComponentStyles from '../../hooks/useComponentStyles';
import type { IImageProps } from './types';

export const Image = (props: IImageProps, ref: any) => {
    const { style, ...rest } = props;
    const styles = useComponentStyles('Image', style);

    return <NativeImage ref={ref} style={styles} {...rest} />;
};

export default memo(forwardRef(Image));
