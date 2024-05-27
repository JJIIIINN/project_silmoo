import { type ForwardedRef, type HTMLAttributes, type ReactNode, type CSSProperties, forwardRef } from 'react';
import { styled } from 'styled-components';

type PropsType = {
    children: ReactNode;
    tag?: 'p' | 'span';
    size?: CSSProperties['fontSize'];
    color?: CSSProperties['color'];
    weight?: CSSProperties['fontWeight'];
} & HTMLAttributes<HTMLSpanElement>;

export const Text = forwardRef(
    (
        { tag = 'span', children, size = 10, color = '#000000', weight = 500, ...props }: PropsType,
        ref: ForwardedRef<HTMLSpanElement>,
    ) => {
        return (
            <StyledText ref={ref} as={tag} color={color} size={size} $weight={weight} {...props}>
                {children}
            </StyledText>
        );
    },
);

const StyledText = styled.span<{
    color: CSSProperties['color'];
    size: CSSProperties['fontSize'];
    $weight: CSSProperties['fontWeight'];
}>`
    color: ${({ color }) => color};
    font-size: ${({ size }) => size}px;
    font-weight: ${({ $weight }) => $weight};
`;
