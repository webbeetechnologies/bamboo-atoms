import React from 'react';
import { LabelProps, useComponents } from 'bamboo-shoots';

export type Props = LabelProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Label } = useComponents();

    return <Label {...rest}>{text}</Label>;
};
