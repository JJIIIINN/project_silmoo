import { SignUp } from '@/components';
import { styled } from 'styled-components';

export const SignUpPage = () => {
    return (
        <Container>
            <SignUp />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 90vh;
`;
