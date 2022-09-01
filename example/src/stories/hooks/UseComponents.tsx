import React from 'react';
import { useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = {};

export const Example = (_props: Props) => {
    const { Text, Button } = useComponents();

    return (
        <Box alignItems="center">
            <Text>Text Component</Text>
            <Button>Button Component</Button>
        </Box>
    );
};
