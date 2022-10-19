import React from 'react';
import { ItalicProps, useComponents } from 'bamboo-atoms';

export type Props = ItalicProps & {};

export const Example = ({ children, ...rest }: Props) => {
    const { Italic } = useComponents();

    return <Italic {...rest}>{children}</Italic>;
};
