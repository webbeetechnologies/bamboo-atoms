import { useEffect, useRef, useState } from "react";
import { Repository } from "../../repository";
import type { ComponentWithTheme } from "./types";



export const componentRepository = new Repository<ComponentWithTheme<any>>({name: 'component-repository', onRegister: (item, name) => {
    if (!item.Component.displayName)
        item.Component.displayName = name;
    return item;
} });


export const registerComponent: typeof componentRepository['register'] = (name: string, item) => componentRepository.register(name, item)





const sliceGetters  = {
    styles: () => {
        const allComponents = componentRepository.getAll();
        return Object.keys(allComponents).reduce((all: Record<string, ComponentWithTheme['defaultStyles']>, current) => ({ ...all, ...allComponents[current].defaultStyles }), {});
    },
    components: () => {
        const allComponents = componentRepository.getAll();
        return Object.keys(allComponents).reduce((all: Record<string, ComponentWithTheme['Component']>, current) => ({ ...all, [current]: allComponents[current].Component}), {});
    },
} as const

type SliceGetters = typeof sliceGetters;


export const useRegisteryListener = <T extends keyof SliceGetters>(props: { isRoot: boolean, type: T}) => {
    const { isRoot,  } = props;
    const type = useRef(props.type).current;
    const [registeredItems, setRegisteredItems ] = useState<SliceGetters[T]>(sliceGetters[type]);

    useEffect(() => {
        if (!isRoot) return;

        return componentRepository.listen(() => {
            setRegisteredItems(sliceGetters[type]);
        });
    }, [isRoot, setRegisteredItems, type]);


    if (!isRoot) null;

    return registeredItems;
}

