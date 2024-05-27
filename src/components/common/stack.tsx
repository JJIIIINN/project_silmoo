import { type ForwardedRef, type CSSProperties, type HTMLAttributes, forwardRef } from 'react';
import { css, styled } from 'styled-components';

type PropsType = {
    align?: CSSProperties['alignItems'];
    justify?: CSSProperties['justifyContent'];
    direction?: CSSProperties['flexDirection'];
} & HTMLAttributes<HTMLDivElement>;

export const Stack = forwardRef(
    ({ children, direction = 'row', align, justify, ...props }: PropsType, ref: ForwardedRef<HTMLDivElement>) => {
        return (
            <StyledStack ref={ref} direction={direction} $align={align} $justify={justify} {...props}>
                {children}
            </StyledStack>
        );
    },
);

const StyledStack = styled.div<{
    direction: CSSProperties['flexDirection'];
    $align: CSSProperties['alignItems'];
    $justify: CSSProperties['justifyContent'];
}>`
    display: flex;
    flex-direction: ${({ direction }) => (direction === 'column' ? direction : 'row')};
    ${({ $align }) =>
        $align &&
        css`
            align-items: ${$align};
        `}
    ${({ $justify }) =>
        $justify &&
        css`
            justify-content: ${$justify};
        `}
`;
