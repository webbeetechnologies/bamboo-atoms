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

const userTheme = extendTheme({
    H4: { color: 'red', backgroundColor: 'yellow', padding: 8, marginBottom: 4 },
    Text: { color: 'blue', backgroundColor: '#cecece', padding: 8, fontSize: 16 },
    H1: { color: 'red' },
});

export default () => {
    const { H4, Text, H1 } = useComponents(),
        textOverwriteColor1 = React.useRef({ fontSize: 12, backgroundColor: 'lime' }).current,
        textOverwriteColor2 = React.useRef({
            fontSize: 24,
            color: 'red',
            backgroundColor: 'yellow',
        }).current;

    return (
        <>
            <ProvideTheme theme={userTheme}>
                <H4>
                    Styles provided at <Text>top level</Text> outside new theme
                </H4>
                <H1>
                    This should be red
                    <Text style={{ color: 'green', backgroundColor: 'none' }}>
                        This should be green
                        <Text>This should be green also</Text>
                    </Text>
                </H1>
                <Text style={textOverwriteColor1}>
                    <H1>I'm H1 I should be red</H1>
                    I'm blue, <Text>I should be blue and smaller!</Text>
                </Text>
                <Text style={textOverwriteColor2}>
                    I'm red, <Text>I should be red too but bigger!</Text>
                </Text>
            </ProvideTheme>
        </>
    );
};
