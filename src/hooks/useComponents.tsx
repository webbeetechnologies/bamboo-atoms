import { useContext } from 'react';
import { ComponentsContext } from '../core/ComponentsProvider';
import type { ExtendComponentsTypes } from '../types';

const useComponents = <T extends {}>() => {
    return useContext(ComponentsContext) as {} as ExtendComponentsTypes<T>; // extendable // only need to define the property the user wants to replace // NoInfer is for avoid inferring the type of T when it's not specified
};

export default useComponents;
