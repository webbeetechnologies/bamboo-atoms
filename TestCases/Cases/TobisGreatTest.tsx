import { extendTheme, ProvideTheme, useComponents } from 'bamboo-atoms';

const tobisGreatTheme = extendTheme({
    Text: {
        dark: {
            backgroundColor: 'black',
            color: 'white',
        },

        light: {
            backgroundColor: 'white',
            color: 'red',
        },
    },
});

const tobisEvenGreaterTheme = extendTheme({
    colorMode: 'light',
});

export const TobisGreatTest = () => {
    const { Button, Text } = useComponents();
    return (
        <ProvideTheme theme={tobisEvenGreaterTheme}>
            <ProvideTheme theme={tobisGreatTheme}>
                <Button onPress={() => console.log('yeah')}>
                    <Text>Tobis great dark button</Text>
                </Button>
            </ProvideTheme>
        </ProvideTheme>
    );
};

/*
style cascades as in html
themes cascade the opposite way
 */
