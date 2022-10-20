import React from 'react';
import { H6Props, useComponents } from 'bamboo-atoms';

export type Props = H6Props & {};

export const Example = ({ children, ...rest }: Props) => {
    const { H6 } = useComponents();

    return <H6 {...rest}>{children}</H6>;
};
