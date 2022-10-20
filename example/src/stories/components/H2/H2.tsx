import React from 'react';
import { H2Props, useComponents } from 'bamboo-atoms';

export type Props = H2Props & {};

export const Example = ({ children, ...rest }: Props) => {
    const { H2 } = useComponents();

    return <H2 {...rest}>{children}</H2>;
};
