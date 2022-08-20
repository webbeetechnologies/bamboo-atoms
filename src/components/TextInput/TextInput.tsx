import React, { forwardRef, memo } from 'react';
import { StyleSheet, TextInput as NativeTextInput, TextStyle } from 'react-native';
import { useComponentTheme, useInteractionStyles } from '../../hooks';
import type { ITextInputProps } from './types';

export const TextInput = (props: ITextInputProps, ref: any) => {
    const { style, ...rest } = props;
    const themeStyles = useComponentTheme('TextInput');
    const interactionStyles = useInteractionStyles('TextInput', '_active');

    return (
        <NativeTextInput
            ref={ref}
            style={StyleSheet.flatten([themeStyles, interactionStyles, style]) as TextStyle}
            {...rest}
        />
    );
};

export default memo(forwardRef(TextInput));
