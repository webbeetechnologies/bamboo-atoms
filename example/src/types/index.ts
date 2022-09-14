import type { IComponentStyles, ITheme, IStyleWithTheme } from 'bamboo-shoots';
import type { ViewStyle } from 'react-native';

export interface CustomTheme extends ITheme {
    primaryColor: string;
    componentStyles: IComponentStyles & {
        CustomButton: IStyleWithTheme<ViewStyle>;
    };
}
