import React from 'react';
import { TextInputProps, useComponents } from 'bamboo-atoms';

export type Props = TextInputProps & {};

export const Example = (props: Props) => {
    const { TextInput } = useComponents();

    return <TextInput {...props} />;
};
