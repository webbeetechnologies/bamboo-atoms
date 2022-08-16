import React, { FC } from 'react';
import { textFactory } from '../Typography';
import type { IHeadingProps } from './types';
import { ConsumeComponents } from '../../../core/ComponentsProvider';

export const HeadingDefault = textFactory('Heading', { fontSize: 32, fontWeight: 'bold' });

const HeadingComponent: FC<IHeadingProps> = props => {
    return <ConsumeComponents>{({ Heading }) => <Heading {...props} />}</ConsumeComponents>;
};

export default HeadingComponent;
