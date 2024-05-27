import { type ForwardedRef, forwardRef, type InputHTMLAttributes } from 'react';
import { Text } from './text';
import { styled } from 'styled-components';

type InputProps = {
    label?: string;
    width?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
    ({ label, width = '100%', onChange, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <StyledInputWrapper width={width}>
                {label && <Text size={12}>{label}</Text>}
                <StyledInput ref={ref} label={label} onChange={onChange} {...props} />
            </StyledInputWrapper>
        );
    },
);

const StyledInputWrapper = styled.label<{ width?: string }>`
    display: inline-flex;
    flex-direction: column;
    width: ${({ width }) => width};
`;

const StyledInput = styled.input<InputProps>`
    width: 100%;
    height: 52px;
    margin-top: ${({ label }) => (label ? '4px' : '0px')};
    padding-right: 16px;
    padding-left: 16px;
    border: 1px solid black;
    border-radius: 4px;

    background-color: white;
    outline: none;

    color: black;
    caret-color: black;

    ::placeholder {
        color: black;
        font-size: 16px;
    }
`;
