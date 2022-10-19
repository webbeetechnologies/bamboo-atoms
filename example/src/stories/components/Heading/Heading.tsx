import React from 'react';
import { HeadingProps, useComponents } from 'bamboo-atoms';

export type Props = HeadingProps & {};

export const Example = ({ children, ...rest }: Props) => {
    const { Heading } = useComponents();

    return <Heading {...rest}>{children}</Heading>;
};
