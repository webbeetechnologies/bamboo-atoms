import React, { FC } from 'react';
import { textFactory } from '../Typography';
import type { IStrongProps } from './types';
import { ConsumeComponents } from '../../../core/ComponentsProvider';

export const StrongDefault = textFactory('Strong', { fontWeight: 'bold' });

const StrongComponent: FC<IStrongProps> = props => {
    return <ConsumeComponents>{({ Strong }) => <Strong {...props} />}</ConsumeComponents>;
};

export default StrongComponent;
