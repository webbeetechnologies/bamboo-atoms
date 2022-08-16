import React, { FC } from 'react';
import { textFactory } from '../Typography';
import type { ITextProps } from './types';
import { ConsumeComponents } from '../../../core/ComponentsProvider';

export const TextDefault = textFactory('Text', {});

const TextComponent: FC<ITextProps> = props => {
    return <ConsumeComponents>{({ Text }) => <Text {...props} />}</ConsumeComponents>;
};

export default TextComponent;
