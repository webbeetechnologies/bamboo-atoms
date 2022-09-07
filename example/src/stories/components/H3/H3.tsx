import React from 'react';
import { H3Props, useComponents } from 'bamboo-shoots';

export type Props = H3Props & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { H3 } = useComponents();

    return <H3 {...rest}>{text}</H3>;
};
