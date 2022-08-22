export { ProvideTheme, ThemeContext, extendTheme } from './ThemeProvider';

export type { Theme, ComponentStyles, ExtractStylesFuncArgs } from './types';

// will only export it from here instead of the root because this might pollute the root namespace
export {
    ActivityIndicator as activityIndicatorStyles,
    Button as buttonStyles,
    Image as imageStyles,
    TextInput as textInputStyles,
    H1 as h1Styles,
    H2 as h2Styles,
    H3 as h3Styles,
    H4 as h4Styles,
    H5 as h5Styles,
    H6 as h6Styles,
    Heading as headingStyles,
    Italic as italicStyles,
    Label as labelStyles,
    Strikethrough as strikethroughStyles,
    Strong as strongStyles,
    Switch as switchStyles,
    Text as textStyles,
    Underline as underlineStyles,
    View as viewStyles,
} from './defaultStyles';
