import { useEffect, useRef, useState } from 'react';
import { Repository } from '../../repository';
import type { ComponentWithTheme } from './types';
import merge from 'ts-deepmerge';

export const componentRepository = new Repository<ComponentWithTheme<any>>({
    name: 'component-repository',
    onRegister: (item, name, registry) => {
        if (!item.Component.displayName) item.Component.displayName = name;
        return {
            ...item,
            defaultStyles: merge(registry[name]?.defaultStyles ?? {}, item.defaultStyles ?? {}),
        };
    },
});

export const registerAtom: typeof componentRepository['register'] = (name: string, item) =>
    componentRepository.register(name, { ...item, defaultStyles: item.defaultStyles ?? {} });

const sliceGetters = {
    styles: () => {
        const allComponents = componentRepository.getAll();
        return Object.keys(allComponents).reduce(
            (all: Record<string, ComponentWithTheme['defaultStyles']>[], current) =>
                all.concat(all, allComponents[current].defaultStyles ?? {}),
            [],
        );
    },
    components: () => {
        const allComponents = componentRepository.getAll();
        return Object.keys(allComponents).reduce(
            (all: Record<string, ComponentWithTheme['Component']>, current) => ({
                ...all,
                [current]: allComponents[current].Component,
            }),
            {},
        );
    },
} as const;

type SliceGetters = typeof sliceGetters;

export const useRegisteryListener = <T extends keyof SliceGetters>(props: {
    isRoot: boolean;
    type: T;
}) => {
    const { isRoot } = props;
    const type = useRef(props.type).current;
    const [registeredItems, setRegisteredItems] = useState<SliceGetters[T] | null>(
        isRoot ? sliceGetters[type] : null,
    );

    useEffect(() => {
        if (!isRoot) return;

        return componentRepository.listen(() => {
            setRegisteredItems(sliceGetters[type]);
        });
    }, [isRoot, setRegisteredItems, type]);

    if (!isRoot) null;

    return registeredItems as ReturnType<SliceGetters[T]> | null;
};
