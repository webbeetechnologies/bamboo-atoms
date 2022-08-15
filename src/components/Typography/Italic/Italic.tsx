import type { FC } from 'react';
import { textFactory } from '../Typography';
import type { IItalicProps } from './types';
import { useComponent } from '../../../core/ComponentsProvider';

export const ItalicDefault = textFactory('Italic', { fontStyle: 'italic' });

const Italic: FC<IItalicProps> = () => {
    return useComponent('Italic');
};

export default Italic;
