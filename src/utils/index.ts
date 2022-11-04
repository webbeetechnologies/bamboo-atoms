import type { ReactNode } from 'react';
import { Appearance } from 'react-native';
import type { ColorMode, IExtendComponentsTypes } from '../core';

// we use this function to extract components from the provider component // this also make it easier to define the types of injected components with the use of generic
export const extractComponents =
    <T>(children: (comp: IExtendComponentsTypes<T>) => ReactNode) =>
    (props: IExtendComponentsTypes<T>) =>
        children(props);

export const resolveColorMode = (colorMode: ColorMode) => {
    const defaultMode = Appearance.getColorScheme() || 'light';

    return colorMode === 'auto' ? defaultMode : colorMode;
};
