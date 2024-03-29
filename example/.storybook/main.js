module.exports = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-react-native-web',
    ],
    framework: '@storybook/react',
    webpackFinal: async (config, { configType }) => {
        config.devtool = 'source-map';
        return config;
    },
};
