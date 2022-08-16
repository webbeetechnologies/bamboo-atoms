import React, { forwardRef } from 'react';
import { Switch as NativeSwitch } from 'react-native';
import type { ISwitchProps } from './types';

export const Switch = (props: ISwitchProps, ref: any) => {
    return <NativeSwitch ref={ref} {...props} />;
};

export default forwardRef(Switch);
