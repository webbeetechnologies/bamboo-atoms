import React, { forwardRef, memo } from 'react';
import { StyleSheet, TextInput as NativeTextInput, TextStyle } from 'react-native';
import useComponentTheme from '../../hooks/useComponentTheme';
import type { ITextInputProps } from './types';

export const TextInput = (props: ITextInputProps, ref: any) => {
    const { style, ...rest } = props;
    const themeStyles = useComponentTheme('TextInput');

    return (
        <NativeTextInput
            ref={ref}
            style={StyleSheet.flatten([themeStyles, style]) as TextStyle}
            {...rest}
        />
    );
};

export default memo(forwardRef(TextInput));
