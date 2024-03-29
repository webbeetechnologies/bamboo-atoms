import React from 'react';
import { useComponents } from 'bamboo-atoms';
import { Source } from '@storybook/addon-docs';
import { InjectedComponentTypes, withDocsWrapper } from '../../common';

const DocsPage = () => {
    const { View, H1, H3, Text, Code, Strong } = useComponents<InjectedComponentTypes>();

    return (
        <View>
            <H1>Components Provider</H1>
            <Text>
                We use Context API for the Components Injection. We inject the components once(at
                the highest level of the components tree) and use them everywhere. Just like how we
                use them normally. All the props and functionalities of the components will still be
                available.
            </Text>

            <H3>Usage with Functional Components</H3>
            <Text>
                With Functional Components, we can take leverage of the hooks. We can use
                <Code>useComponents</Code> hook to easily consume the default components or the
                injected components.
            </Text>
            <Text>
                We can modify the types of default components, if they're injected, by using a
                generic in <Code>useComponents</Code> hook. The generic will automatically extend
                the default components' interface, so, we only need to add the types of the
                component we want to modify or replace.
            </Text>

            <Source language="tsx" code={firstCodeBlock} />

            <H3>Usage with Class Components</H3>
            <Text>
                With Class Components, we can use <Code>ConsumeComponents</Code> along with{' '}
                <Code>extractComponents</Code>
                function to use the default components and injected components.{' '}
                <Code>extractComponents</Code>
                function also make it easier to add generic to modify the default types if you're
                using <Strong>Typescript</Strong>
            </Text>
            <Source language="tsx" code={secondCodeBlock} />

            <H3>Injecting Components with Custom Names</H3>
            <Text>
                Components Object in the provider is extendable. That means we can add new
                properties in there.
            </Text>
            <Text>example: </Text>

            <Source language="tsx" code={thirdCodeBlock} />
        </View>
    );
};

const firstCodeBlock = `
import { ProvideComponents, useComponents } from '@webbee/bamboo-atoms';
import { Button as PaperButton, ButtonProps as Props } from 'react-native-paper';

type InjectedComponentTypes = { // only need to define the types of injected components and custom components
    Button: typeof PaperButton;
};
// to memoize the object
const components = {
    Button: PaperButton, // here we replace here default Button component with some other component that we want
};

const ButtonContainer = (props: Props) => {
    const { Button } = useComponents<InjectedComponentTypes>();

    return (
        <Button mode="contained" {...props}>
            Injected Button
        </Button>
    );
};

export const App = (props: Props) => {
    return (
        <ProvideComponents components={components}>
            <ButtonContainer {...props} />
        </ProvideComponents>
    );
};
`;

const secondCodeBlock = `
import { ConsumeComponents, extractComponents, ProvideComponents } from '@webbee/bamboo-atoms';
import { MyButton } from './MyButton';

interface InjectedComponentTypes {
    Button: typeof MyButton;
}

const components = {
    Button: MyButton,
}

class CardWithProvider extends Component {
    // recommended to use extractComponents function to extract the components from the context
    // and insert injected component types as generic
    renderComponents = extractComponents<InjectedComponentTypes>(
        ({ Button }) => (
            <Button>Injected Button</CustomButton>
        ),
    );

    render() {
        return (
            <ProvideComponents components={components}>
                <ConsumeComponents>
                    {this.renderComponents}
                </ConsumeComponents>
            </ProvideComponents>
        );
    }
}
`;

const thirdCodeBlock = `
interface InjectedComponentTypes {
    CustomComponent: typeof MyCustomComponent;
}

const components = {
    CustomComponent: MyCustomComponent, // CustomComponent isn't a pre-defined property in the Components context
}

export const Example = () => {
    const { Text, CustomComponent } = useComponents<InjectedComponentTypes>();

    return (
        <>
            <Text>Default Text</Text>
            <CustomComponent>Injected Component</MyButton>
        </>
    );
};
`;

export default withDocsWrapper(DocsPage);
