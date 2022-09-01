import type { ComponentStyles, Theme, StyleWithTheme } from 'bamboo-shoots';
import type { ViewStyle } from 'react-native';

export interface CustomTheme extends Theme {
    primaryColor: string;
    componentStyles: ComponentStyles & {
        CustomButton: StyleWithTheme<ViewStyle>;
    };
}
