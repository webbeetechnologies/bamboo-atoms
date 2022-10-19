import React from 'react';
import { StyleSheet } from 'react-native';
import { useComponents, useMediaQuery } from 'bamboo-atoms';

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
        <Text>
            {Object.keys(props).map(key => `${key}: ${props[key as keyof Props]}, `)} -{' '}
            <Text style={styles.textStyles}>{query ? 'true' : 'false'}</Text>
        </Text>
    );
};

const styles = StyleSheet.create({
    textStyles: { color: 'blue', fontWeight: 'bold' },
});
