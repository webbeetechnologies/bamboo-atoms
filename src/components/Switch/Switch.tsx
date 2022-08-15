import React, { FC, forwardRef } from 'react';
import { Switch as NativeSwitch } from 'react-native';
import type { ISwitchProps } from './types';
import { useComponent } from '../../core/ComponentsProvider';

export const SwitchDefault = forwardRef((props: ISwitchProps, ref: any) => {
    return <NativeSwitch ref={ref} {...props} />;
});

const Switch: FC<ISwitchProps> = () => {
    return useComponent('Switch');
};

export default Switch;
