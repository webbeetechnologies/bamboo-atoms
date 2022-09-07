import React from 'react';
import { StrongProps, useComponents } from 'bamboo-shoots';

export type Props = StrongProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Strong } = useComponents();

    return <Strong {...rest}>{text}</Strong>;
};
