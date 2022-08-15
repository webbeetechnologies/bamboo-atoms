import React, { memo, forwardRef } from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import type { ITextInputProps } from './types';

const TextInput = (props: ITextInputProps, ref: any) => {
    return <NativeTextInput ref={ref} {...props} />;
};

export default memo(forwardRef(TextInput));
