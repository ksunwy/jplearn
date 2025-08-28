import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_13: Lesson = {
    id: "n5_vocabulary_13",
    level: "N5",
    title: "City & Places",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn Japanese words for places in town.
    sports - スポーツ 。 
    TV - テレビ 。 
    home; house - 家 (いえ) 。 
    cafe - カフェ 。 
    bank - 銀行 (ぎんこう) 。 
    toilet - トイレ 。 
    library - 図書館 (としょかん) 。 
    post office - 郵便局 (ゆうびんきょく) 。 
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "typing",
            question: "Translate into Japanese: bank",
            answer: "銀行"
        },
        {
            id: "ex2",
            type: "vocabulary",
            question: "Choose the correct translation for 'toilet':",
            extra: { options: ["トイレ", "学校", "靴"] },
            answer: "トイレ"
        },
        {
            id: "ex3",
            type: "kanji",
            question: "Write in kanji: ゆうびんきょく (post office)",
            answer: "郵便局"
        },
        {
            id: "ex4",
            type: "typing",
            question: "Translate into Japanese: home; house",
            answer: "家"
        },
        {
            id: "ex5",
            type: "typing",
            question: "Translate into Japanese: movie",
            answer: "映画"
        },
        {
            id: "ex6",
            type: "typing",
            question: "Translate into Japanese: music",
            answer: "音楽"
        },
        {
            id: "ex7",
            type: "vocabulary",
            question: "Choose the correct translation for 'sports':",
            extra: { options: ["スポーツ", "雑誌", "図書館"] },
            answer: "スポーツ"
        },
        {
            id: "ex8",
            type: "typing",
            question: "Translate into Japanese: tennis",
            answer: "テニス"
        },
        {
            id: "ex9",
            type: "typing",
            question: "Translate into Japanese: TV",
            answer: "テレビ"
        },
        {
            id: "ex10",
            type: "kanji",
            question: "Write in kanji: いえ (house)",
            answer: "家"
        }
    ]
};
