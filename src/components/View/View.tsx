import React, { forwardRef, FC } from 'react';
import { View as NativeView } from 'react-native';
import type { IViewProps } from './types';
import { useComponent } from '../../core/ComponentsProvider';

export const ViewDefault = forwardRef((props: IViewProps, ref: any) => {
    return <NativeView ref={ref} {...props} />;
});

const View: FC<IViewProps> = () => {
    return useComponent('View');
};

export default View;
