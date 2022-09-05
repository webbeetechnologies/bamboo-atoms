import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    Story => (
        <PaperProvider>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Story />
            </View>
        </PaperProvider>
    ),
];
