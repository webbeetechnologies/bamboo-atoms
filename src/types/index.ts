import type { ComponentsProviderContext } from '../core/ComponentsProvider';

export type NoInfer<T> = [T][T extends any ? 0 : never];

export type ExtendComponentsTypes<T extends {}> = Omit<
    ComponentsProviderContext,
    keyof NoInfer<T>
> &
    NoInfer<T>; // replace the properties of ComponentsProviderContext with the properties of T
