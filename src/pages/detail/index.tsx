import { useAnswer } from '@/stores';
import { recommendFood } from '@/utils';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export const DetailPage = () => {
    const { answer, selectAnswer } = useAnswer();
    const [history, setHistory] = useState<string[]>([]);

    useEffect(() => {
        setHistory((prev) => [...prev, answer.title]);
    }, [answer.title]);

    return (
        <StyleContainer>
            <Typography variant="h2" component="h1" fontWeight={500} gutterBottom>
                {answer.title}
            </Typography>
            <Divider />
            <Typography variant="body1" paragraph>
                {answer.contents}
            </Typography>
            <Grid container spacing={4} style={{ marginTop: '12px' }}>
                {answer.image.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia component="img" alt={`Image ${index + 1}`} height="200" image={image} />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                    {`${answer.title} ${index + 1}`}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button
                variant="contained"
                style={{ marginTop: '50px', marginBottom: '100px' }}
                onClick={() => {
                    selectAnswer(recommendFood(answer.keyword, history)!);
                }}
            >
                다른 음식 추천받기
            </Button>
        </StyleContainer>
    );
};

const StyleContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    margin-top: 100px;
    margin-bottom: 100px;
`;

const Divider = styled.div`
    width: 1152px;
    height: 1px;
    margin-bottom: 50px;

    background-color: #c5c5c5;
`;
