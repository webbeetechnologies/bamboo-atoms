import React from 'react';
import { StrongProps, useComponents } from 'bamboo-shoots';

export type Props = StrongProps & {};

export const Example = ({ children, ...rest }: Props) => {
    const { Strong } = useComponents();

    return <Strong {...rest}>{children}</Strong>;
};
