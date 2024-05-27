import {
    Container,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Button,
} from '@mui/material';
import { styled } from 'styled-components';
import { useForm } from '@/hooks';
import { QuestionList } from '@/constants';
import { recommendFood } from '@/utils';
import { useAnswer } from '@/stores';
import { useNavigate } from 'react-router-dom';

export const Investigate = () => {
    const { selectAnswer } = useAnswer();
    const navigate = useNavigate();
    const { form: responses, handleChange } = useForm({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
    });

    const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 } = responses;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        selectAnswer(recommendFood(Object.values(responses))!);
        navigate('/detail');
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                취향 정보 수집 설문조사
            </Typography>
            <Form onSubmit={handleSubmit}>
                {QuestionList.map((question, listIndex) => (
                    <FormControl key={listIndex} component="fieldset" sx={{ mb: 2 }}>
                        <FormLabel component="legend">{`질문 ${listIndex + 1}. ${question.title}`}</FormLabel>
                        <RadioGroup
                            aria-label={`question${listIndex + 1}`}
                            name={`q${listIndex + 1}`}
                            value={responses[`q${(listIndex + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`]}
                            onChange={handleChange}
                        >
                            {question.contents.map((content, contentIndex) => (
                                <FormControlLabel
                                    key={contentIndex}
                                    value={content}
                                    control={<Radio />}
                                    label={content}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                ))}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10}
                    style={{ marginBottom: '40px' }}
                >
                    제출하기
                </Button>
            </Form>
        </Container>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
