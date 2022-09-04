import { useContext } from 'react';
import { ComponentsContext, ExtendComponentsTypes } from '../core';

// comma to let compiler know that T is a generic type
const useComponents = <T,>() => {
    return useContext(ComponentsContext) as {} as ExtendComponentsTypes<T>; // extendable // only need to define the property the user wants to replace // NoInfer is for avoid inferring the type of T when it's not specified
};

export default useComponents;
