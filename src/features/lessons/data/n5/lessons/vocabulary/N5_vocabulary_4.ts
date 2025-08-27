import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_4: Lesson = {
    id: "n5_vocabulary_4",
    level: "N5",
    title: "Countries and Nationalities",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn the names of countries and nationalities.

1. Japan - 日本 (にほん)
2. U.S.A. - アメリカ
3. Britain - イギリス
4. Australia - オーストラリア
5. Korea - 韓国 (かんこく)
6. Sweden - スウェーデン
7. China - 中国 (ちゅうごく)
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "kanji",
            question: "Translate into Japanese: Japan",
            answer: "日本"
        },
        {
            id: "ex2",
            type: "vocabulary",
            question: "Choose the correct translation for 'U.S.A.':",
            extra: {
                options: ["イギリス", "アメリカ", "オーストラリア"]
            },
            answer: "アメリカ"
        },
        {
            id: "ex3",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Korea'.",
            answer: "韓国"
        },
        {
            id: "ex4",
            type: "typing",
            question: "Translate into Japanese: Britain",
            answer: "イギリス"
        },
        {
            id: "ex5",
            type: "vocabulary",
            question: "Choose the correct translation for 'Australia':",
            extra: {
                options: ["アメリカ", "オーストラリア", "スウェーデン"]
            },
            answer: "オーストラリア"
        },
        {
            id: "ex6",
            type: "kanji",
            question: "Fill in the blank: '___' means 'China'.",
            answer: "中国"
        },
        {
            id: "ex7",
            type: "typing",
            question: "Translate into Japanese: Sweden",
            answer: "スウェーデン"
        },
        {
            id: "ex8",
            type: "vocabulary",
            question: "Choose the correct translation for 'Korea':",
            extra: {
                options: ["韓国", "イギリス", "中国"]
            },
            answer: "韓国"
        },
        {
            id: "ex9",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Japan'.",
            answer: "日本"
        },
        {
            id: "ex10",
            type: "kanji",
            question: "Translate into Japanese: China",
            answer: "中国"
        }
    ]
};
