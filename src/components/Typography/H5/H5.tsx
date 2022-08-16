import React, { FC } from 'react';
import { textFactory } from '../Typography';
import type { IH5Props } from './types';
import { ConsumeComponents } from '../../../core/ComponentsProvider';

export const H5Default = textFactory('H5', { fontSize: 13.28, fontWeight: 'bold' });

const H5Component: FC<IH5Props> = props => {
    return <ConsumeComponents>{({ H5 }) => <H5 {...props} />}</ConsumeComponents>;
};

export default H5Component;
