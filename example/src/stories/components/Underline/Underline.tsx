import React from 'react';
import { UnderlineProps, useComponents } from 'bamboo-atoms';

export type Props = UnderlineProps & {};

export const Example = ({ children, ...rest }: Props) => {
    const { Underline } = useComponents();

    return <Underline {...rest}>{children}</Underline>;
};
