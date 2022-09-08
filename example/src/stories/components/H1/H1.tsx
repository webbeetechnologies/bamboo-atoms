import React from 'react';
import { H1Props, useComponents } from 'bamboo-shoots';

export type Props = H1Props & {};

export const Example = ({ children, ...rest }: Props) => {
    const { H1 } = useComponents();

    return <H1 {...rest}>{children}</H1>;
};
