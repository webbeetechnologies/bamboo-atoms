import React, { forwardRef } from 'react';
import { View as NativeView } from 'react-native';
import type { IViewProps } from './types';

export const View = forwardRef((props: IViewProps, ref: any) => {
    return <NativeView ref={ref} {...props} />;
});

export default View;
