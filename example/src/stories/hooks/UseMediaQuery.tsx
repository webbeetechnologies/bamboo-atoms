import React from 'react';
import { useComponents, useMediaQuery } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = {
    maxWidth?: number;
    minWidth?: number;
    maxHeight?: number;
    minHeight?: number;
    orientation?: 'portrait' | 'landscape';
};

export const Example = (props: Props) => {
    const { Text } = useComponents();
    const query = useMediaQuery(props);

    return (
        <Box alignItems="center">
            <Text>
                {Object.keys(props).map(key => `${key}: ${props[key as keyof Props]}, `)} -{' '}
                <Text style={{ color: 'blue', fontWeight: 'bold' }}>
                    {query ? 'true' : 'false'}
                </Text>
            </Text>
        </Box>
    );
};
