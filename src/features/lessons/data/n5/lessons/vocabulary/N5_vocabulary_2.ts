import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_2: Lesson = {
    id: "n5_vocabulary_2",
    level: "N5",
    title: "School Life",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn words related to school life.

1. Student - 学生 (がくせい)。 
2. High school - 高校 (こうこう)。 
3. College; university - 大学 (だいがく)。 
4. First-year student - いちねんせい。 
5. Teacher - 先生 (せんせい)。 
6. International student - 留学生 (りゅうがくせい)。 
7. High school student - 高校生 (こうこうせい)。 
8. College student - 大学生 (だいがくせい)。 
9. Graduate student - 大学院生 (だいがくいんせい)。 
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "typing",
            question: "Translate into Japanese: High school",
            answer: "高校"
        },
        {
            id: "ex2",
            type: "vocabulary",
            question: "Choose the correct translation for 'Teacher':",
            extra: {
                options: ["学生", "先生", "大学"]
            },
            answer: "先生"
        },
        {
            id: "ex3",
            type: "typing",
            question: "Fill in the blank: '___' means 'First-year student'.",
            answer: "一年生"
        },
        {
            id: "ex4",
            type: "typing",
            question: "Translate into Japanese: College student",
            answer: "大学生"
        },
        {
            id: "ex5",
            type: "vocabulary",
            question: "Choose the correct translation for 'International student':",
            extra: {
                options: ["留学生", "高校生", "大学院生"]
            },
            answer: "留学生"
        },
        {
            id: "ex6",
            type: "typing",
            question: "Fill in the blank: '___' means 'High school student'.",
            answer: "高校生"
        },
        {
            id: "ex7",
            type: "typing",
            question: "Translate into Japanese: Graduate student",
            answer: "大学院生"
        },
        {
            id: "ex8",
            type: "vocabulary",
            question: "Choose the correct translation for 'University':",
            extra: {
                options: ["高校", "大学", "先生"]
            },
            answer: "大学"
        },
        {
            id: "ex9",
            type: "typing",
            question: "Fill in the blank: '___' means 'Student'.",
            answer: "学生"
        },
        {
            id: "ex10",
            type: "typing",
            question: "Translate into Japanese: High school student",
            answer: "高校生"
        }
    ]
};
