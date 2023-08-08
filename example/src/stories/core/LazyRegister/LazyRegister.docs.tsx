import React from 'react';
import { useComponents } from 'bamboo-atoms';
import { Source } from '@storybook/addon-docs';
import { InjectedComponentTypes, withDocsWrapper } from '../../common';

const DocsPage = () => {
    const { View, H1, H3, Text } = useComponents<InjectedComponentTypes>();

    return (
        <View>
            <H1>Lazy Register Components and styles</H1>
            <Text>
                Registering components lazily allows you to inject components somewhere down the
                component tree without having to worry about importing them all in one place.
            </Text>

            <H3>Provide Components</H3>
            <Text>
                Register a new component before or after the Component Provider context has already
                rendered. Components passed to the context provider as props always takes
                precedence.
            </Text>

            <H3>Provide Theme</H3>
            <Text>
                Register a component theme along with the component. This allows you to also define
                a default theme for the component.
            </Text>

            <Source language="tsx" code={firstCodeBlock} />
        </View>
    );
};

const firstCodeBlock = `
import { ProvideComponents, useComponents, registerAtom } from '@webbee/bamboo-atoms';

type InjectedComponentTypes = { // only need to define the types of injected components and custom components
    MyAwesomeComponent: ComponentType<MyAwesomeComponentProps>;
};

type MyAwesomeComponentProps = {

}

const MyAwesomeComponent = () => {
    const { Text } = useComponents<InjectedComponentTypes>();
    return <Text style={useComponentStyles("MyAwesomeComponent")}>I'm the most awesomest component. Expect me to be in red</Text>
}

registerAtom('MyAwesomeComponent', {
    Component: MyAwesomeComponent,
    defaultStyles: {
        MyAwesomeComponent: {
            color: 'red',
            fontSize: 16,
        }
    }
})

const ButtonContainer = (props: Props) => {
    const { MyAwesomeComponent } = useComponents<InjectedComponentTypes>();

    return <MyAwesomeComponent />;
};

export const App = (props: Props) => {
    return (
        <ProvideComponents components={components}>
            <ProvideTheme>
                <ButtonContainer {...props} />
            </ProvideTheme>
        </ProvideComponents>
    );
};
`;

export default withDocsWrapper(DocsPage);
