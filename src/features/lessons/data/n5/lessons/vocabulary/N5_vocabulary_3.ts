import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_3: Lesson = {
    id: "n5_vocabulary_3",
    level: "N5",
    title: "Family and Relatives",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn words related to family and relatives.

1. I - 私 (わたし)。 
2. Mother - 母 (はは / お母さん)。 
3. Father - 父 (ちち / お父さん)。 
4. Older sister - 姉 (あね / お姉さん)。 
5. Older brother - 兄 (あに)。 
6. Younger sister - 妹 (いもうと)。 
7. Younger brother - 弟 (おとうと)。 
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "typing",
            question: "Translate into Japanese: I",
            answer: "私"
        },
        {
            id: "ex2",
            type: "vocabulary",
            question: "Choose the correct translation for 'Mother':",
            extra: {
                options: ["父", "母", "姉"]
            },
            answer: "母"
        },
        {
            id: "ex3",
            type: "typing",
            question: "Fill in the blank: '___' means 'Father' politely.",
            answer: "お父さん"
        },
        {
            id: "ex4",
            type: "typing",
            question: "Translate into Japanese: Older sister",
            answer: ["姉", "お姉さん"]
        },
        {
            id: "ex5",
            type: "vocabulary",
            question: "Choose the correct translation for 'Younger brother':",
            extra: {
                options: ["兄", "弟", "姉"]
            },
            answer: "弟"
        },
        {
            id: "ex6",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Older sister'.",
            answer: "姉"
        },
        {
            id: "ex7",
            type: "kanji",
            question: "Translate into Japanese: Younger sister",
            answer: "妹"
        },
        {
            id: "ex8",
            type: "vocabulary",
            question: "Choose the correct translation for 'Older brother':",
            extra: {
                options: ["兄", "弟", "姉"]
            },
            answer: "兄"
        },
        {
            id: "ex9",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Younger brother'.",
            answer: "弟"
        },
        {
            id: "ex10",
            type: "typing",
            question: "Translate into Japanese: Father",
            answer: ["父", "お父さん"]
        }
    ]
};
