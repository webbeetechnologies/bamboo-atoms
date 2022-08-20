import React, { forwardRef, memo } from 'react';
import { Image as NativeImage, ImageStyle, StyleSheet } from 'react-native';
import { useComponentTheme } from '../../hooks';
import type { IImageProps } from './types';

export const Image = (props: IImageProps, ref: any) => {
    const { style, ...rest } = props;
    const themeStyles = useComponentTheme('Image');

    return (
        <NativeImage
            ref={ref}
            style={StyleSheet.flatten([themeStyles as ImageStyle, style])}
            {...rest}
        />
    );
};

export default memo(forwardRef(Image));
