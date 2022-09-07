import React from 'react';
import { HeadingProps, useComponents } from 'bamboo-shoots';

export type Props = HeadingProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Heading } = useComponents();

    return <Heading {...rest}>{text}</Heading>;
};
