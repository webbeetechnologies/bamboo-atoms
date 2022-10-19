import React from 'react';
import { extendTheme, ProvideTheme, useComponents } from 'bamboo-atoms';

/**
 *
 * UseCase: As a consumer of various libraries and bamboo atoms, I want to be able to inject component styles at the top level to overwrite all library styles.
 *
 * Description: A consumer should be able to provide styles and themes to overwrite the design created by the libraries.
 *
 * Problem:
 * In the given samples
 *  - all text should be blue; except for the text that has inline color defined, but then all nested text below that should have the style of the parent text.
 *  - all H4 should be green;
 *  - all views should have the styles defined by the user;
 *  - all buttons should have a red background;
 *
 * Technical details:
 * 1. Take all the theme provided components from the top level and merge it down.
 * 2. User theme takes most preference.
 * 3. Document for library creators: create overwrite components and necessary themes for them.
 */

const library1Theme = extendTheme({
    Button: { backgroundColor: 'orange' },
    Text: { color: 'purple' },
});

const library2Theme = extendTheme({
    Button: { backgroundColor: 'yellow' },
    Text: { color: 'red' },
});

const userTheme = extendTheme({
    Button: { backgroundColor: 'red' },
    H4: { color: 'green', margin: 24, paddingHorizontal: 16 },
    View: { maxWidth: '300px', backgroundColor: '#ccc', padding: 8, marginVertical: 8 },
    Text: { color: 'blue' },
});

// Assume this is a component from a library
const Library1 = () => {
    const { View, Heading, Button, Text, Strong } = useComponents();
    return (
        <ProvideTheme theme={library1Theme}>
            <View>
                <Heading>I'm rendered by Library 1</Heading>
                <Button children={<Text>Library 1 Button</Text>} />

                <Text>
                    Lorem ipsum dolor sit amet, <Strong>consectetur adipiscing elit</Strong>. Sed
                    consequat, felis sit amet consequat interdum, nunc nisl feugiat metus, id
                    maximus dui nulla at eros. Pellentesque sagittis est ac velit vulputate, eget
                    rutrum ante placerat. Proin consectetur turpis sit amet neque fermentum tempor.
                    Fusce congue felis semper sem efficitur dapibus. Phasellus pellentesque risus
                    quis cursus faucibus. Etiam lectus arcu, tempor vel ultricies nec, molestie in
                    turpis. Fusce rutrum purus ante, quis venenatis ipsum egestas id. Quisque vitae
                    massa et diam placerat mattis. Aliquam erat volutpat. Cras non ultricies nunc.
                    Sed faucibus augue in nibh tempus dapibus. Mauris sollicitudin ipsum vitae massa
                    lobortis volutpat. In cursus condimentum ipsum vel tincidunt.
                </Text>
                <Text>
                    Nulla id rhoncus magna, et suscipit neque. Suspendisse nec dictum sapien. Nulla
                    id gravida felis, eu pulvinar nisl. Ut ac consequat diam. Sed auctor est sapien,
                    quis auctor purus posuere non. Suspendisse blandit dolor eget arcu hendrerit
                    egestas. Quisque ut orci sed lectus sodales mattis. Phasellus eget lobortis mi.
                    Ut eu nisl vitae neque blandit ultricies. Donec finibus est ac ex pharetra, eu
                    elementum justo imperdiet.
                </Text>
            </View>
        </ProvideTheme>
    );
};

// Assume this is a component from a library
const Library2 = () => {
    const { View, Heading, Button, Text } = useComponents();
    return (
        <ProvideTheme theme={library2Theme}>
            <View>
                <Heading>I'm rendered by Library 2</Heading>
                <Button children={<Text>Library 2 button</Text>} />
            </View>
            <Library1 />
        </ProvideTheme>
    );
};

export default () => {
    const { View, H4, Button, Text } = useComponents();

    return (
        <>
            <H4>Styles provided at top level outside new theme</H4>
            <ProvideTheme theme={userTheme}>
                <View>
                    <H4>
                        Styles provided at top <Text>level but themed</Text>
                    </H4>
                </View>
                <Button>
                    <Text>Themed Button</Text>
                </Button>
                <Library2 />
            </ProvideTheme>
        </>
    );
};
