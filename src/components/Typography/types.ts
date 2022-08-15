import type { TextProps as NativeTextProps } from 'react-native';

export interface TextProps extends NativeTextProps {}

export interface ITypographyProps extends TextProps {
    strong?: boolean;
    heading?: boolean;
    italic?: boolean;
    strikethrough?: boolean;
    label?: boolean;
    underline?: boolean;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
}
