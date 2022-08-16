import React, { FC } from 'react';
import { textFactory } from '../Typography';
import type { IH2Props } from './types';
import { ConsumeComponents } from '../../../core/ComponentsProvider';

export const H2Default = textFactory('H2', { fontSize: 24, fontWeight: 'bold' });

const H2Component: FC<IH2Props> = props => {
    return <ConsumeComponents>{({ H2 }) => <H2 {...props} />}</ConsumeComponents>;
};

export default H2Component;
