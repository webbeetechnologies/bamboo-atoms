import React from 'react';
import { H4Props, useComponents } from 'bamboo-atoms';

export type Props = H4Props & {};

export const Example = ({ children, ...rest }: Props) => {
    const { H4 } = useComponents();

    return <H4 {...rest}>{children}</H4>;
};
