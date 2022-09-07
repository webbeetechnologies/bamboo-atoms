import React from 'react';
import { H6Props, useComponents } from 'bamboo-shoots';

export type Props = H6Props & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { H6 } = useComponents();

    return <H6 {...rest}>{text}</H6>;
};
