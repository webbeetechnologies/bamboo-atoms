import React from 'react';
import { ConsumeComponents, ProvideComponents, useComponents } from 'bamboo-shoots';

/**
 * 
 * UseCase: As a consumer of various libraries and bamboo shoots, I want to be able to inject new components and any location in component tree.
 * 
 * Description: A consumer provides several components to overwrite the components used by libraries; but the custom components from the library overwrites the user components.
 * A consumer should be able to provide custom components that are used by the library.
 * 
 * Problem: 
 * The end consumer cannot replace the Buttons replaced by Library 1 OR Library 2.
 * This is a problem that we had long ignored.
 * 
 * Technical details:
 * 1. Take all the provided components from the top level.
 * 2. Document for library creators: create overwrite components and use them down their library component tree.
 */



const EndProductButton = ({ children }: any) => <button>Hello - {children}</button>;

const EndProductHeading = ({ children }: any) => <h4 style={{ color: "red" }}>Hello World - {children}</h4>;

const Library2Button = ({ children }: any) => {
    return <button>Aloha - {children}</button>
};


const Library1Button = ({ children }: any) => {
    return <button>Ola - {children}</button>
};


// Assume this is a component from a library
const Library1 = () => (
    <ProvideComponents components={{ Button: Library1Button }}>
        <ConsumeComponents>{
            ({ View, Button, Heading, }) => (
                <View>
                    <Heading>I'm rendered by Library 1</Heading>
                    <Button children="Library 1 Button" />
                </View>
            )
        }</ConsumeComponents>
    </ProvideComponents>
)


// Assume this is a component from a library
const Library2 = () => (
    <ProvideComponents components={{ Button: Library2Button }}>
        <ConsumeComponents>{
            ({ View, Button, Heading, }) => (
                <>
                    <View>
                        <Heading>I'm rendered by Library 2</Heading>
                        <Button children="Library 2 button" />
                    </View>

                    <Library1 />
                </>
            )
        }</ConsumeComponents>
    </ProvideComponents>
)


export default () => {
    const { View, H4 } = useComponents();


    return (
        <ProvideComponents components={{ Button: EndProductButton, Heading: EndProductHeading }}>
            <View>
                <H4>Components provided at top level</H4>
            </View>
            <ConsumeComponents>
                {
                    ({ Button, Heading }) => {
                        return (
                            <>
                                <View>
                                    <Heading>I'm rendered by the end product</Heading>
                                    <Button children="End Product Button" />
                                </View>
                                <Library2 />
                            </>
                        )
                    }
                }
            </ConsumeComponents>
        </ProvideComponents>
    )
};
