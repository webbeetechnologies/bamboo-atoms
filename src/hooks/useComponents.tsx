import { useContext } from 'react';
import { ComponentsContext } from '../core/ComponentsProvider';

const useComponents = () => {
    return useContext(ComponentsContext);
};

export default useComponents;
