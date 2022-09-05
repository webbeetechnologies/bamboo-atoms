import React from 'react';
import { ItalicProps, useComponents } from 'bamboo-shoots';

export type Props = ItalicProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Italic } = useComponents();

    return <Italic {...rest}>{text}</Italic>;
};
