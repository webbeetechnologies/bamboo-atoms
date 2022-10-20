import React from 'react';
import { useComponents } from 'bamboo-atoms';

export type Props = {};

export const Example = (_props: Props) => {
    const { Text, Button } = useComponents();

    return (
        <>
            <Text>Text Component</Text>
            <Button>
                <Text>Button Component</Text>
            </Button>
        </>
    );
};
