import React, { FC } from 'react';
import { textFactory } from '../Typography';
import type { IItalicProps } from './types';
import { ConsumeComponents } from '../../../core/ComponentsProvider';

export const ItalicDefault = textFactory('Italic', { fontStyle: 'italic' });

const ItalicComponent: FC<IItalicProps> = props => {
    return <ConsumeComponents>{({ Italic }) => <Italic {...props} />}</ConsumeComponents>;
};

export default ItalicComponent;
