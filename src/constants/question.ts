type QuestionListType = { title: string; contents: string[] }[];

export const QuestionList: QuestionListType = [
    { title: '아래의 선택지 중 하나를 선택해주세요.', contents: ['한식', '일식', '양식', '중식', '퓨전 음식'] },
    { title: '어떤 종류의 음식을 원하시나요?', contents: ['밥', '면', '떡', '빵', '고기'] },
    { title: '어느정도의 매운 음식을 원하시나요?', contents: ['매우 매운 것', '적당히 매운 것', '아예 안 매운 것'] },
    { title: '어떤 온도의 음식을 원하시나요?', contents: ['뜨거운 것', '차가운 것'] },
    { title: '야채가 포함되어 있는 음식을 좋아하시나요?', contents: ['야채없는 것', '야채있는 것'] },
    { title: '고기가 포함되어 있는 음식을 좋아하시나요?', contents: ['고기없는 것', '고기있는 것'] },
    { title: '채식주의자이신가요?', contents: ['채식주의자O', '채식주의자X'] },
    { title: '기름진 음식을 좋아하시나요?', contents: ['기름진 음식', '깔끔한 음식'] },
    { title: '단 음식을 좋아하시나요?', contents: ['단 음식', '달지않은 음식'] },
    { title: '가격대를 선택해주세요.', contents: ['10,000원 이하', '10,000원 ~ 20,000원', '20,000원 이상'] },
];
