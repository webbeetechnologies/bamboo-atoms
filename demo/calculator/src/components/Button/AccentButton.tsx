import { useComponents, useComponentStyles } from '@webbee/bamboo-atoms';
import { CustomButtonProps } from '.';
import { InjectedComponentTypes } from '../Theme';

const AccentButton = ({ children, style, ...props }: CustomButtonProps) => {
    const accentButton = useComponentStyles('AccentButton', style);
    const { RoundButton, Text } = useComponents<InjectedComponentTypes>();

    // custom logic
    return (
        <RoundButton {...props} style={accentButton}>
            <Text>{children as any}</Text>
        </RoundButton>
    );
};

export default AccentButton;
