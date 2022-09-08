import React from 'react';
import { StrikethroughProps, useComponents } from 'bamboo-shoots';

export type Props = StrikethroughProps & {};

export const Example = ({ children, ...rest }: Props) => {
    const { Strikethrough } = useComponents();

    return <Strikethrough {...rest}>{children}</Strikethrough>;
};
