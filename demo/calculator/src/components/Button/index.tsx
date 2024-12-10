import { ButtonProps } from '@webbee/bamboo-atoms';

export type CustomButtonProps = ButtonProps & {
    type?: 'symbol' | 'accent' | 'default';
};

export { default as RoundButton } from './RoundButton';
export { default as AccentButton } from './AccentButton';
export { default as SymbolButton } from './SymbolButton';
export { default as DoubleButton } from './DoubleButton';
