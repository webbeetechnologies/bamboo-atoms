import React, { FC, forwardRef } from 'react';
import { View as NativeView } from 'react-native';
import type { IViewProps } from './types';
import { ConsumeComponents } from '../../core/ComponentsProvider';

export const ViewDefault = forwardRef((props: IViewProps, ref: any) => {
    return <NativeView ref={ref} {...props} />;
});

const ViewComponent: FC<IViewProps> = props => {
    return <ConsumeComponents>{({ View }) => <View {...props} />}</ConsumeComponents>;
};

export default ViewComponent;
