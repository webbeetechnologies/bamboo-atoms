import React, { FC } from 'react';
import { textFactory } from '../Typography';
import { ConsumeComponents } from '../../../core/ComponentsProvider';
import type { IH4Props } from './types';

export const H4Default = textFactory('H4', { fontSize: 16, fontWeight: 'bold' });

const H4Component: FC<IH4Props> = props => {
    return <ConsumeComponents>{({ H4 }) => <H4 {...props} />}</ConsumeComponents>;
};

export default H4Component;
