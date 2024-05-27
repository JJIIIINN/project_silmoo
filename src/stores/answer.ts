import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type AnswerType = {
    title: string;
    contents: string;
    image: string[];
    keyword: string[];
};

type AnswerState = {
    answer: AnswerType;
    selectAnswer: (answer: AnswerType) => void;
};

export const useAnswer = create<AnswerState>()(
    devtools((set) => ({
        answer: {
            title: '',
            contents: '',
            image: [],
            keyword: [],
        },
        selectAnswer: (answer) =>
            set({
                answer: answer,
            }),
    })),
);
