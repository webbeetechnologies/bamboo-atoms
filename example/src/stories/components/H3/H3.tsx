import React from 'react';
import { H3Props, useComponents } from 'bamboo-atoms';

export type Props = H3Props & {};

export const Example = ({ children, ...rest }: Props) => {
    const { H3 } = useComponents();

    return <H3 {...rest}>{children}</H3>;
};
