import React, { createContext, ReactNode } from 'react';

export interface BambooShootsProviderContext {
    colorMode: 'light' | 'dark';
}

export const BambooShootsProviderContext = createContext<BambooShootsProviderContext>({
    colorMode: 'light',
});

export const BambooShootsProvider = ({
    children,
    ...contextValue
}: BambooShootsProviderContext & { children: ReactNode }) => {
    return (
        <BambooShootsProviderContext.Provider value={contextValue}>
            {children}
        </BambooShootsProviderContext.Provider>
    );
};
