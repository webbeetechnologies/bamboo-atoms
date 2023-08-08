import React, { ComponentProps, ComponentType, PropsWithChildren } from 'react';
import { Button as RNButton, Text as RNText, ViewProps } from 'react-native';
import {
    ProvideComponents,
    ProvideTheme,
    TextProps,
    registerAtom,
    useComponentStyles,
    useComponents,
} from 'bamboo-atoms';

export type Props = ComponentProps<typeof RNButton> & {};

// For Paper components to work properly, we have to wrap all the components inside the Provider provided by the react-native-paper.
type InjectedComponents = {
    Button: typeof RNButton;
    CustomComponent: ComponentType;
    Code: ComponentType<PropsWithChildren<TextProps>>;
    HorizontalDivider: ComponentType<ViewProps>;
};

const components = {};

registerAtom('Button', {
    Component: props => {
        return <RNButton title="I am a React Native Button" {...props} />;
    },
});

registerAtom('Code', {
    Component: props => {
        const { Text } = useComponents();
        return <Text {...props} style={useComponentStyles('Code', props.style)} />;
    },
    defaultStyles: {
        Code: {
            borderColor: '#ddd',
            borderWidth: 1,
            borderRadius: 2,
            padding: 4,
            marginTop: 4,
        },
    },
});

const customComponentStyles = { marginTop: 8 };
registerAtom('CustomComponent', {
    Component: () => {
        const { Text, View, Code } = useComponents<InjectedComponents>();

        const componentStyles = useComponentStyles('CustomComponent');
        return (
            <View style={customComponentStyles}>
                <Text>default styles for lazy registered CustomComponent:</Text>
                <Code style={componentStyles}>{JSON.stringify(componentStyles, null, 4)}</Code>
            </View>
        );
    },
    defaultStyles: {
        CustomComponent: {
            backgroundColor: '#333',
            color: '#fff',
        },
    },
});

registerAtom('H1', {
    Component: (props: ComponentProps<typeof RNText>) => {
        const componentStyles = useComponentStyles('H1');
        return <RNText {...props} style={componentStyles} />;
    },
    defaultStyles: {
        H1: {
            fontSize: 20,
            marginBottom: 8,
        },
    },
});

registerAtom('H2', {
    Component: (props: ComponentProps<typeof RNText>) => {
        const componentStyles = useComponentStyles('H2');
        return <RNText {...props} style={componentStyles} />;
    },
    defaultStyles: {
        H2: {
            fontSize: 16,
            padding: 4,
            marginBottom: 8,
            backgroundColor: '#ccc',
            borderRadius: 2,
        },
    },
});

registerAtom('HorizontalDivider', {
    Component: () => {
        const { View } = useComponents();
        const componentStyles = useComponentStyles('HorizontalDivider');

        return <View style={componentStyles} />;
    },
    defaultStyles: {
        HorizontalDivider: {
            marginVertical: 8,
            borderTopWidth: 1,
            borderColor: '#999',
            borderWidth: 0,
            width: '100%',
        },
    },
});

const storyContainer = { alignSelf: 'flex-start' as const };

const StoryRenderer = (props: Props) => {
    const { View, Button, CustomComponent, HorizontalDivider, H1, H2 } =
        useComponents<InjectedComponents>();

    return (
        <View style={storyContainer}>
            <H1>Usage: Replacing an existing default component passed as a prop</H1>
            <H2>{`I'm a react-native Text Component,\nI replace the default H2 from bamboo-atoms.`}</H2>
            <HorizontalDivider />
            <H1>Usage: Injecting new components</H1>
            <Button onPress={() => {}} {...props} />
            <CustomComponent />
        </View>
    );
};

export const Example = (props: Props) => {
    return (
        <ProvideComponents components={components}>
            <ProvideTheme>
                <StoryRenderer {...props} />
            </ProvideTheme>
        </ProvideComponents>
    );
};
