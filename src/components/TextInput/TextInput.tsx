import React, { forwardRef, memo } from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import useComponentStyles from '../../hooks/useComponentStyles';
import type { ITextInputProps } from './types';

export const TextInput = (props: ITextInputProps, ref: any) => {
    const { style, ...rest } = props;
    const styles = useComponentStyles('TextInput', style);

    return <NativeTextInput ref={ref} style={styles} {...rest} />;
};

export default memo(forwardRef(TextInput));
