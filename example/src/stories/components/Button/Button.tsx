import React from 'react';
import { ButtonProps, useComponents } from 'bamboo-shoots';

export type Props = ButtonProps & {};

export const Example = ({ children, ...rest }: Props) => {
    const { Button } = useComponents();

    return <Button {...rest}>{children}</Button>;
};
