import React, { FC, forwardRef } from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import type { ITextInputProps } from './types';
import { useComponent } from '../../core/ComponentsProvider';

export const TextInputDefault = forwardRef((props: ITextInputProps, ref: any) => {
    return <NativeTextInput ref={ref} {...props} />;
});

const TextInput: FC<ITextInputProps> = () => {
    return useComponent('TextInput');
};

export default TextInput;
