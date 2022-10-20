import React from 'react';
import { useComponents, ViewProps } from 'bamboo-atoms';

export type Props = ViewProps & {};

export const Example = (props: Props) => {
    const { View, Text } = useComponents();

    return (
        <View {...props}>
            <Text>Box</Text>
        </View>
    );
};
