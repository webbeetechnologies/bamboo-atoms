import React from 'react';
import { UnderlineProps, useComponents } from 'bamboo-shoots';

export type Props = UnderlineProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Underline } = useComponents();

    return <Underline {...rest}>{text}</Underline>;
};
