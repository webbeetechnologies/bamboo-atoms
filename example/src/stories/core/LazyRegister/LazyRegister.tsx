import React, { ComponentProps, ComponentType, PropsWithChildren } from 'react';
import { Button as RNButton} from "react-native"
import { ProvideComponents, ProvideTheme, TextProps, registerComponent, useComponentStyles, useComponents } from 'bamboo-atoms';


export type Props = ComponentProps<typeof RNButton> & {};

// For Paper components to work properly, we have to wrap all the components inside the Provider provided by the react-native-paper.
type InjectedComponents = {
    Button: typeof RNButton;
    CustomComponent: ComponentType;
    Code: ComponentType<PropsWithChildren<TextProps>>
};

const components = {
};


registerComponent("Button", {
    Component: (props) => {
        return <RNButton title='I am a React Native Button' { ...props } />
    },
    defaultStyles: {},
});



registerComponent("Code", {
    Component: (props) => {
        const  { Text, } = useComponents();
        return <Text {...props} style={useComponentStyles('Code', props.style)} />
    },
    defaultStyles: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 2,
        padding: 4,
        marginTop: 4,
    },
});



registerComponent("CustomComponent", {
    Component: () => {
        const  { Text, View, Code } = useComponents<InjectedComponents>();

        const componentStyles = useComponentStyles('CustomComponent');
        return <View style={{ marginTop: 8, }}>
            <Text>default styles for lazy registered CustomComponent:</Text><Code style={componentStyles}>{JSON.stringify(componentStyles, null, 4)}</Code></View>
    },
    defaultStyles: {
        backgroundColor: '#333',
        color: '#fff'
    },
});


const ButtonContainer = (props: Props) => {
    const { Button, CustomComponent } = useComponents<InjectedComponents>();

    return (
        <ProvideTheme>
            <Button onPress={() => {}} {...props} />
            <CustomComponent />
        </ProvideTheme>
    );
};

export const Example = (props: Props) => {
    return (
        <ProvideComponents components={components}>
            <ButtonContainer {...props} />
        </ProvideComponents>
    );
};
