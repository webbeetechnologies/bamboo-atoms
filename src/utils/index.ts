import type { ReactNode } from 'react';
import type { ExtendComponentsTypes } from '../core';

// we use this function to extract components from the provider component // this also make it easier to define the types of injected components with the use of generic
export const extractComponents =
    <T>(children: (comp: ExtendComponentsTypes<T>) => ReactNode) =>
    (props: ExtendComponentsTypes<T>) =>
        children(props);
