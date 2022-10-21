import React from 'react';
import { Dimensions } from 'react-native';
import { useComponents, useComponentStyles } from '@webbee/bamboo-atoms';
import { CustomButtonProps } from '.';

export const RoundButton = ({ type = 'default', style, children, ...props }: CustomButtonProps) => {
    // set dimmenstion
    const screen = Dimensions.get('window');
    const buttonWidth = screen.width / 6;
    const { Button } = useComponents();
    const roundButton = useComponentStyles('RoundButton');

    // custom logic
    return (
        <Button
            {...props}
            style={[
                { height: Math.floor(buttonWidth - 10), borderRadius: Math.floor(buttonWidth) },
                roundButton,
                style,
            ]}>
            {children as any}
        </Button>
    );
};

export default RoundButton;
