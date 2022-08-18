import React, { forwardRef, memo } from 'react';
import { View as NativeView } from 'react-native';
import type { IViewProps } from './types';

const View = (props: IViewProps, ref: any) => {
    return <NativeView ref={ref} {...props} />;
};

export default memo(forwardRef(View));
