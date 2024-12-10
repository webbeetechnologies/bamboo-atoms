import React, { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import { useComponents, useComponentStyles } from '@webbee/bamboo-atoms';
import { CustomButtonProps } from '.';

export const RoundButton = ({ style, children, ...props }: CustomButtonProps) => {
    // set dimmenstion
    const screen = useWindowDimensions();
    const buttonWidth = screen.width / 6;
    const { Button, Text } = useComponents();
    const roundButton = useComponentStyles('RoundButton', style);

    const screenSize = useMemo(
        () => ({ height: Math.floor(buttonWidth - 10), borderRadius: Math.floor(buttonWidth) }),
        [buttonWidth],
    );

    // custom logic
    return (
        <Button {...props} style={[screenSize, roundButton, style]}>
            <Text>{children as any}</Text>
        </Button>
    );
};

export default RoundButton;
