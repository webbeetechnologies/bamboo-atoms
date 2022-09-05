import React from 'react';
import { H4Props, useComponents } from 'bamboo-shoots';

export type Props = H4Props & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { H4 } = useComponents();

    return <H4 {...rest}>{text}</H4>;
};
