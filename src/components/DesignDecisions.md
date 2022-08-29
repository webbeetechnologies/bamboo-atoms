## Implementation Details

### - Button
React Native button doesn't allow user to add children property and required us to use a title property.
For those reasons, we've decided to use Pressable component that allows to add children and isn't opinionated to use the title property.

### - Typography, textFactory function
textFactory function accepts a prop called defaultStyles which will be added directly to the style prop.
Each components that leverage this textFactory func will provide the defaultStyles object.
We opt out of using the theme context in this case because they're the minimal bare-bone styles and can be overridden anyway if the user add the similar style properties in the component theme.
