import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_6: Lesson = {
    id: "n5_vocabulary_6",
    level: "N5",
    title: "Occupations",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn the names of various occupations.

1. Job; work; occupation - 仕事 (しごと)
2. Doctor - 医師 (いしゃ)
3. Office worker - 会社員 (かいしゃいん)
4. High school student - 高校生 (こうこうせい)
5. Housewife - 主婦 (しゅふ)
6. Graduate student - 大学院生 (だいがくいんせい)
7. College student - 大学生 (だいがくせい)
8. Lawyer - 弁護士 (べんごし)
9. Student - 学生 (がくせい)
10. High school - 高校 (こうこう)
11. Major - 専攻 (せんこう)
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "kanji",
            question: "Translate into Japanese: Job",
            answer: "仕事"
        },
        {
            id: "ex2",
            type: "vocabulary",
            question: "Choose the correct translation for 'Doctor':",
            extra: {
                options: ["医師", "会社員", "弁護士"]
            },
            answer: "医師"
        },
        {
            id: "ex3",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Office worker'.",
            answer: "会社員"
        },
        {
            id: "ex4",
            type: "kanji",
            question: "Translate into Japanese: High school student",
            answer: "高校生"
        },
        {
            id: "ex5",
            type: "vocabulary",
            question: "Choose the correct translation for 'Housewife':",
            extra: {
                options: ["主婦", "大学院生", "高校生"]
            },
            answer: "主婦"
        },
        {
            id: "ex6",
            type: "kanji",
            question: "Fill in the blank: '___' means 'College student'.",
            answer: "大学生"
        },
        {
            id: "ex7",
            type: "kanji",
            question: "Translate into Japanese: Lawyer",
            answer: "弁護士"
        },
        {
            id: "ex8",
            type: "vocabulary",
            question: "Choose the correct translation for 'Graduate student':",
            extra: {
                options: ["大学院生", "大学生", "高校生"]
            },
            answer: "大学院生"
        },
        {
            id: "ex9",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Job'.",
            answer: "仕事"
        },
        {
            id: "ex10",
            type: "kanji",
            question: "Translate into Japanese: Office worker",
            answer: "会社員"
        },
          {
            id: "ex11",
            type: "typing",
            question: "Fill in the blank: '___' means 'First-year student'.",
            answer: "一年生"
        },
    ]
};
