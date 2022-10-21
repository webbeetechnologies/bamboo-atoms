import React, { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { useComponents, useComponentStyles } from '@webbee/bamboo-atoms';
import { CustomButtonProps } from '.';

export const RoundButton = ({ style, children, ...props }: CustomButtonProps) => {
    // set dimmenstion
    const screen = useWindowDimensions();
    const { Button, Text } = useComponents();
    const roundButton = useComponentStyles('RoundButton', style);

    const buttonWidth = useMemo(() => screen.width / 6, [screen]);

    // custom logic
    return (
        <Button
            {...props}
            style={[
                { height: Math.floor(buttonWidth - 10), borderRadius: Math.floor(buttonWidth) },
                roundButton,
                style,
            ]}>
            <Text>{children as any}</Text>
        </Button>
    );
};

export default RoundButton;
