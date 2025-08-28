import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_8: Lesson = {
    id: "n5_vocabulary_8",
    level: "N5",
    title: "Time and Schedules",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn words related to time and schedules.

1. Now - 今 (いま)。 
2. P.M. - 午後 (ごご)。 
3. A.M. - 午前 (ごぜん)。 
4. O'clock - 時 (じ)。 
5. Half - 半 (はん)。 
6. Number - 番号 (ばんごう)。 
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "kanji",
            question: "Translate into Japanese: Now",
            answer: "今"
        },
        {
            id: "ex2",
            type: "vocabulary",
            question: "Choose the correct translation for 'P.M.':",
            extra: {
                options: ["午前", "午後", "今"]
            },
            answer: "午後"
        },
        {
            id: "ex3",
            type: "kanji",
            question: "Fill in the blank: '___' means 'A.M.'.",
            answer: "午前"
        },
        {
            id: "ex4",
            type: "kanji",
            question: "Translate into Japanese: O'clock",
            answer: "時"
        },
        {
            id: "ex5",
            type: "vocabulary",
            question: "Choose the correct translation for 'Half':",
            extra: {
                options: ["今", "半", "午後"]
            },
            answer: "半"
        },
        {
            id: "ex6",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Number'.",
            answer: "番号"
        },
        {
            id: "ex7",
            type: "kanji",
            question: "Translate into Japanese: A.M.",
            answer: "午前"
        },
        {
            id: "ex8",
            type: "vocabulary",
            question: "Choose the correct translation for 'O'clock':",
            extra: {
                options: ["時", "今", "午後"]
            },
            answer: "時"
        },
        {
            id: "ex9",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Now'.",
            answer: "今"
        },
        {
            id: "ex10",
            type: "kanji",
            question: "Translate into Japanese: Half",
            answer: "半"
        }
    ]
};
