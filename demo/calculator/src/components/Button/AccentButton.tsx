import { useComponents, useComponentStyles } from '@webbee/bamboo-atoms';
import { CustomButtonProps } from '.';
import { InjectedComponentTypes } from '../Theme';

const AccentButton = ({ type = 'default', children, ...props }: CustomButtonProps) => {
    const accentButton = useComponentStyles('AccentButton');
    const { RoundButton } = useComponents<InjectedComponentTypes>();

    // custom logic
    return (
        <RoundButton {...props} style={accentButton}>
            {children as any}
        </RoundButton>
    );
};

export default AccentButton;
