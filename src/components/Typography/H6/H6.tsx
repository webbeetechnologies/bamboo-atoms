import React, { FC } from 'react';
import { textFactory } from '../Typography';
import type { IH6Props } from './types';
import { ConsumeComponents } from '../../../core/ComponentsProvider';

export const H6Default = textFactory('H6', { fontSize: 10.72, fontWeight: 'bold' });

const H6Component: FC<IH6Props> = props => {
    return <ConsumeComponents>{({ H6 }) => <H6 {...props} />}</ConsumeComponents>;
};

export default H6Component;
