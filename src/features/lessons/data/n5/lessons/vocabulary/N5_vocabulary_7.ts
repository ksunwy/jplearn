import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_7: Lesson = {
    id: "n5_vocabulary_7",
    level: "N5",
    title: "Communication and Interaction",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn words related to communication and interaction.

1. Name - 名前 (なまえ)
2. What - 何 (なに)
3. Telephone - 電話 (でんわ)
4. Friend - 友人 (ともだち)
5. Thank you - ありがとう
6. Thank you (polite) - ありがとうございます
7. Excuse me; I'm sorry - すみません
8. No; Not at all - いいえ
9. Yes - はい
10. That's right - そうです
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "kanji",
            question: "Translate into Japanese: Name",
            answer: "名前"
        },
        {
            id: "ex2",
            type: "vocabulary",
            question: "Choose the correct translation for 'What':",
            extra: {
                options: ["名前", "何", "友人"]
            },
            answer: "何"
        },
        {
            id: "ex3",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Telephone'.",
            answer: "電話"
        },
        {
            id: "ex4",
            type: "kanji",
            question: "Translate into Japanese: Friend",
            answer: "友人"
        },
        {
            id: "ex5",
            type: "vocabulary",
            question: "Choose the correct translation for 'Thank you':",
            extra: {
                options: ["すみません", "ありがとう", "いいえ"]
            },
            answer: "ありがとう"
        },
        {
            id: "ex6",
            type: "typing",
            question: "Fill in the blank: '___' means 'Excuse me; I'm sorry'.",
            answer: "すみません"
        },
        {
            id: "ex7",
            type: "typing",
            question: "Translate into Japanese: Yes",
            answer: "はい"
        },
        {
            id: "ex8",
            type: "vocabulary",
            question: "Choose the correct translation for 'No':",
            extra: {
                options: ["はい", "いいえ", "そうです"]
            },
            answer: "いいえ"
        },
        {
            id: "ex9",
            type: "typing",
            question: "Fill in the blank: '___' means 'That's right'.",
            answer: "そうです"
        },
        {
            id: "ex10",
            type: "typing",
            question: "Translate into Japanese: Thank you (polite)",
            answer: "ありがとうございます"
        }
    ]
};
