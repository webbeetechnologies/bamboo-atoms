import React, { forwardRef } from 'react';
import { StyleProp, Text as NativeText } from 'react-native';
import type { ITypographyProps } from './types';

export const textFactory = (_name: string, defaultStyle: StyleProp<any>) =>
    forwardRef((props: ITypographyProps, ref: any) => {
        // const styles = useComponentStyles(name); // which will come from ThemeContext
        return <NativeText ref={ref} {...props} style={[defaultStyle, props.style]} />;
    });
