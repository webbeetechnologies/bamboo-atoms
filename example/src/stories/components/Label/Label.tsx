import React from 'react';
import { LabelProps, useComponents } from 'bamboo-atoms';

export type Props = LabelProps & {};

export const Example = ({ children, ...rest }: Props) => {
    const { Label } = useComponents();

    return <Label {...rest}>{children}</Label>;
};
