import { ButtonProps } from '@webbee/bamboo-atoms';

export type CustomButtonProps = ButtonProps & {
    type?: 'symbol' | 'accent' | 'default';
};

// export const CalcButton = ({ type = 'default', children, ...props }: CustomButtonProps) => {
//     const { Button } = useComponents();
//     const RoundButton = useComponentStyles('RoundButton');
//     const ButtonSecondary = useComponentStyles('ButtonSecondary');
//     const ButtonAccent = useComponentStyles('ButtonAccent');
//     let symbolStyles = useMemo(
//         () => ({ ...RoundButton, ...ButtonSecondary }),
//         [RoundButton, ButtonSecondary],
//     );
//     let accentStyles = useMemo(
//         () => ({ ...RoundButton, ...ButtonAccent }),
//         [RoundButton, ButtonAccent],
//     );
//     const styles =
//         type === 'symbol' ? symbolStyles : type === 'accent' ? accentStyles : RoundButton;

//     // custom logic
//     return (
//         <Button style={styles} {...props}>
//             {children as any}
//         </Button>
//     );
// };

export { default as RoundButton } from './RoundButton';
export { default as AccentButton } from './AccentButton';
export { default as SymbolButton } from './SymbolButton';
export { default as DoubleButton } from './DoubleButton';
