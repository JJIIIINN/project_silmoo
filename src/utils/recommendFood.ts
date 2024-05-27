import { AnswerList } from '@/constants';

export const recommendFood = (keywords: string[], recommendedFoodTitles?: string[]) => {
    let maxScore = 0;
    let recommendedFood = null;

    const otherFoods = recommendedFoodTitles
        ? AnswerList.filter((food) => !recommendedFoodTitles?.includes(food.title))
        : AnswerList;

    // 모든 음식을 반복하면서 설문과 키워드와의 유사도를 계산
    for (const food of otherFoods) {
        let score = 0;

        // 키워드와 음식 키워드의 유사도 계산
        for (const keyword of keywords) {
            if (food.keyword.includes(keyword)) {
                score++;
            }
        }

        // 가장 높은 유사도를 가진 음식 선택
        if (score > maxScore) {
            maxScore = score;
            recommendedFood = food;
        }
    }

    return recommendedFood;
};
