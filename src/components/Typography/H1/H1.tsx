import React, { FC } from 'react';
import { ConsumeComponents } from '../../../core/ComponentsProvider';
import { textFactory } from '../Typography';
import type { IH1Props } from './types';

export const H1Default = textFactory('H1', { fontSize: 32, fontWeight: 'bold' });

const H1Component: FC<IH1Props> = props => {
    return <ConsumeComponents>{({ H1 }) => <H1 {...props} />}</ConsumeComponents>;
};

export default H1Component;
