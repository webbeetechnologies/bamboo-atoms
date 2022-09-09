import React from 'react';
import { extendTheme, ProvideTheme, useComponents } from '@webbee/bamboo-atoms';


/**
 * 
 * UseCase: As a consumer of various libraries and bamboo shoots, I want to be able to inject component styles at the top level to overwrite all library styles.
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


const userTheme = {
    theme: extendTheme({
        componentStyles: {
            H4: { color: "red", backgroundColor: "yellow", padding: 8, marginBottom: 4 },
            Text: { color: "blue", backgroundColor: "#cecece", padding: 8, fontSize: 16 },
        },
    })
}


export default () => {
    const { H4, Text } = useComponents(),
          textOverwriteColor1 = React.useRef({ fontSize: 12, backgroundColor: "lime" }).current,
          textOverwriteColor2 = React.useRef({ fontSize: 24, color: "red", backgroundColor: "yellow" }).current;

    return (
        <>
            <ProvideTheme value={userTheme}>
                <H4>Styles provided at <Text>top level</Text> outside new theme</H4>
                <Text style={textOverwriteColor1}>I'm blue, <Text>I should be blue and smaller!</Text></Text>
                <Text style={textOverwriteColor2}>I'm red, <Text>I should be red too but bigger!</Text></Text>
            </ProvideTheme>
        </>
    )
};
