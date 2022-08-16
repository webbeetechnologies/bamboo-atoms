import React, { FC, forwardRef } from 'react';
import { TextInput as NativeTextInput } from 'react-native';
import type { ITextInputProps } from './types';
import { ConsumeComponents } from '../../core/ComponentsProvider';

export const TextInputDefault = forwardRef((props: ITextInputProps, ref: any) => {
    return <NativeTextInput ref={ref} {...props} />;
});

const TextInputComponent: FC<ITextInputProps> = props => {
    return <ConsumeComponents>{({ TextInput }) => <TextInput {...props} />}</ConsumeComponents>;
};

export default TextInputComponent;
