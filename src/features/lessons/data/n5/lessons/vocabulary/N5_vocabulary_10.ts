import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_10: Lesson = {
    id: "n5_vocabulary_10",
    level: "N5",
    title: "Food & Drinks",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn and practice basic food and drink vocabulary in Japanese.
    delicious - おいしい。 
    fish - 魚 (さかな)。 
    pork cutlet - とんかつ。 
    meat - 肉 (にく)。 
    menu - メニュー。 
    vegetable - 野菜 (やさい)。 
    ice cream - アイスクリーム。 
    breakfast - 朝ご飯 (あさごはん)。 
    sake; alcohol - お酒 (おさけ)。 
    green tea - お茶 (おちゃ)。 
    coffee - コーヒー。 
    dinner - 晩ご飯。 
    hamburger - ハンバーガー。 
    lunch - 昼ご飯。 
    water - 水 (みず)。 
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "typing",
            question: "Translate into Japanese: delicious",
            answer: "おいしい"
        },
        {
            id: "ex2",
            type: "vocabulary",
            question: "Choose the correct translation for 'fish':",
            extra: { options: ["肉", "魚", "野菜"] },
            answer: "魚"
        },
        {
            id: "ex3",
            type: "kanji",
            question: "Translate into Japanese: meat",
            answer: "肉"
        },
        {
            id: "ex4",
            type: "typing",
            question: "Translate into Japanese: pork cutlet",
            answer: "とんかつ"
        },
        {
            id: "ex5",
            type: "typing",
            question: "Translate into Japanese: vegetable",
            answer: "野菜"
        },
        {
            id: "ex6",
            type: "vocabulary",
            question: "Choose the correct translation for 'menu':",
            extra: { options: ["メニュー", "ノート", "新聞"] },
            answer: "メニュー"
        },
        {
            id: "ex7",
            type: "kanji",
            question: "Write in kanji: おちゃ (green tea)",
            answer: "お茶"
        },
        {
            id: "ex8",
            type: "typing",
            question: "Translate into Japanese: dinner",
            answer: "晩ご飯"
        },
        {
            id: "ex9",
            type: "typing",
            question: "Translate into Japanese: lunch",
            answer: "昼ご飯"
        },
        {
            id: "ex10",
            type: "typing",
            question: "Translate into Japanese: breakfast",
            answer: "朝ご飯"
        },
        {
            id: "ex11",
            type: "vocabulary",
            question: "Choose the correct translation for 'water':",
            extra: { options: ["水", "酒", "音楽"] },
            answer: "水"
        },
        {
            id: "ex12",
            type: "kanji",
            question: "Translate into Japanese: sake; alcohol",
            answer: "お酒"
        }
    ]
};
