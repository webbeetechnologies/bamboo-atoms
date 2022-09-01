import React from 'react';
import { H2Props, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = H2Props & {
    text: string;
};

export const Example = ({ text, ...rest }: Props) => {
    const { H2 } = useComponents();

    return (
        <Box alignItems="center">
            <H2 {...rest}>{text}</H2>
        </Box>
    );
};
