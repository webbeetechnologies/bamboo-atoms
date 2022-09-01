import React from 'react';
import { StrongProps, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = StrongProps & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { Strong } = useComponents();

    return (
        <Box alignItems="center">
            <Strong {...rest}>{text}</Strong>
        </Box>
    );
};
