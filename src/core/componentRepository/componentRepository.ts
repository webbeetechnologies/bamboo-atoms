import { useEffect, useRef, useState } from "react";
import { Repository } from "../../repository";
import type { ComponentWithTheme } from "./types";



export const componentRepository = new Repository<ComponentWithTheme<any>>({name: 'component-repository', onRegister: (item, name) => {
    if (!item.Component.displayName)
        item.Component.displayName = name;
    return item;
} });


export const registerComponent: typeof componentRepository['register'] = (name: string, item) => componentRepository.register(name, item)


const getAllFactory = <T extends keyof ComponentWithTheme>(arg: T) => () => {
    const allComponents = componentRepository.getAll();

    return Object.keys(allComponents).reduce((all: Record<string, ComponentWithTheme[T]>, current) => ({ ...all, [current]: allComponents[current][arg]}), {});
}


export const getAllComponents = getAllFactory('Component');


export const getAllStyles = getAllFactory('defaultStyles');



const sliceGetters  = {
    styles: getAllStyles,
    components: getAllComponents,
} as const

type SliceGetters = typeof sliceGetters;


export const useRegisteryListener = <T extends keyof SliceGetters>(props: { hasParentContext: boolean, type: T}) => {
    const { hasParentContext,  } = props;
    const type = useRef(props.type).current;
    const [registeredItems, setRegisteredItems ] = useState<SliceGetters[T]>(sliceGetters[type]);

    useEffect(() => {
        if (hasParentContext) return;

        return componentRepository.listen(() => {
            setRegisteredItems(sliceGetters[type]);
        });
    }, [hasParentContext, setRegisteredItems, type]);


    if (hasParentContext) null;

    return registeredItems;
}

