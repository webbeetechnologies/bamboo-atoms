import { useComponentStyles } from '@webbee/bamboo-atoms';
import { CustomButtonProps, RoundButton } from '.';

const DoubleButton = ({ type = 'default', children, ...props }: CustomButtonProps) => {
    const doubleButton = useComponentStyles('DoubleButton');

    // custom logic
    return (
        <RoundButton {...props} style={doubleButton}>
            {children as any}
        </RoundButton>
    );
};

export default DoubleButton;
