import React, { FC, forwardRef } from 'react';
import { ActivityIndicator as NativeActivityIndicator } from 'react-native';
import type { IActivityIndicatorProps } from './types';
import { ConsumeComponents } from '../../core/ComponentsProvider';

export const ActivityIndicatorDefault = forwardRef((props: IActivityIndicatorProps, ref: any) => {
    return <NativeActivityIndicator ref={ref} {...props} />;
});

const ActivityIndicatorComponent: FC<IActivityIndicatorProps> = props => {
    return (
        <ConsumeComponents>
            {({ ActivityIndicator }) => <ActivityIndicator {...props} />}
        </ConsumeComponents>
    );
};

export default ActivityIndicatorComponent;
