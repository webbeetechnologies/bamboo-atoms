import React, { useState } from 'react';
import { SwitchProps, useComponents } from 'bamboo-shoots';
import Box from '../../components/Box';

export type Props = SwitchProps & {};

export const Example = (props: Props) => {
    const { Switch } = useComponents();
    const [isOn, setIsOn] = useState(false);
    const onToggleSwitch = () => {
        // eslint-disable-next-line no-console
        console.log('toggle');
        setIsOn(!isOn);
    };

    return (
        <Box alignItems="center">
            <Switch value={isOn} onValueChange={onToggleSwitch} {...props} />
        </Box>
    );
};
