import React from 'react';
import { H2Props, useComponents } from 'bamboo-shoots';

export type Props = H2Props & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { H2 } = useComponents();

    return <H2 {...rest}>{text}</H2>;
};
