import React, { FC, forwardRef } from 'react';
import { Switch as NativeSwitch } from 'react-native';
import type { ISwitchProps } from './types';
import { ConsumeComponents } from '../../core/ComponentsProvider';

export const SwitchDefault = forwardRef((props: ISwitchProps, ref: any) => {
    return <NativeSwitch ref={ref} {...props} />;
});

const SwitchComponent: FC<ISwitchProps> = props => {
    return <ConsumeComponents>{({ Switch }) => <Switch {...props} />}</ConsumeComponents>;
};

export default SwitchComponent;
