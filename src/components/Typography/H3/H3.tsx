import React, { FC } from 'react';
import { textFactory } from '../Typography';
import type { IH3Props } from './types';
import { ConsumeComponents } from '../../../core/ComponentsProvider';

export const H3Default = textFactory('H3', { fontSize: 18.72, fontWeight: 'bold' });

const H3Component: FC<IH3Props> = props => {
    return <ConsumeComponents>{({ H3 }) => <H3 {...props} />}</ConsumeComponents>;
};

export default H3Component;
