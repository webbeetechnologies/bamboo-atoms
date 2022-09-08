import React from 'react';
import { ItalicProps, useComponents } from 'bamboo-shoots';

export type Props = ItalicProps & {};

export const Example = ({ children, ...rest }: Props) => {
    const { Italic } = useComponents();

    return <Italic {...rest}>{children}</Italic>;
};
