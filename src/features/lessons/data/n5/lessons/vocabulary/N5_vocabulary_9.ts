import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_9: Lesson = {
    id: "n5_vocabulary_9",
    level: "N5",
    title: "Review and Mixed Practice",
    type: "vocabulary",
    content: [
        `
In this lesson, you will review and practice a mix of vocabulary from previous lessons.
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "typing",
            question: "Translate into Japanese: Good morning (polite)",
            answer: "おはようございます"
        },
        {
            id: "ex2",
            type: "vocabulary",
            question: "Choose the correct translation for 'University':",
            extra: {
                options: ["高校", "大学", "先生"]
            },
            answer: "大学"
        },
        {
            id: "ex3",
            type: "typing",
            question: "Fill in the blank: '___' means 'Father' politely.",
            answer: "お父さん"
        },
        {
            id: "ex4",
            type: "kanji",
            question: "Translate into Japanese: Science",
            answer: "科学"
        },
        {
            id: "ex5",
            type: "vocabulary",
            question: "Choose the correct translation for 'Doctor':",
            extra: {
                options: ["医師", "会社員", "弁護士"]
            },
            answer: "医師"
        },
        {
            id: "ex6",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Telephone'.",
            answer: "電話"
        },
        {
            id: "ex7",
            type: "kanji",
            question: "Translate into Japanese: Now",
            answer: "今"
        },
        {
            id: "ex8",
            type: "vocabulary",
            question: "Choose the correct translation for 'Friend':",
            extra: {
                options: ["名前", "友人", "何"]
            },
            answer: "友人"
        },
        {
            id: "ex9",
            type: "typing",
            question: "Fill in the blank: '___' means 'P.M.'.",
            answer: "午後"
        },
        {
            id: "ex10",
            type: "typing",
            question: "Translate into Japanese: Thank you (polite)",
            answer: "ありがとうございます"
        }
    ]
};
