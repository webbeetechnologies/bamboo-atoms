import type { FC } from 'react';
import { textFactory } from '../Typography';
import type { ITextProps } from './types';
import { useComponent } from '../../../core/ComponentsProvider';

export const TextDefault = textFactory('Text', {});

const Text: FC<ITextProps> = () => {
    return useComponent('Text');
};

export default Text;
