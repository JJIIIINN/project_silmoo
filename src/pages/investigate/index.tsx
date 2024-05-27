import { Investigate } from '@/components';
import { styled } from 'styled-components';

export const InvestigatePage = () => {
    return (
        <Container>
            <Investigate />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding: 60px 0;
`;
