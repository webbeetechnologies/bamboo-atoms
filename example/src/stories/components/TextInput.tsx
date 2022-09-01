import React from 'react';
import { TextInputProps, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = TextInputProps & {};

export const Example = (props: Props) => {
    const { TextInput } = useComponents();

    return (
        <Box alignItems="center">
            <TextInput {...props} />
        </Box>
    );
};
