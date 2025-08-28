import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_5: Lesson = {
    id: "n5_vocabulary_5",
    level: "N5",
    title: "Academic Subjects",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn the names of academic subjects.

1. Science - 科学 (かがく)。 
2. Asian studies - アジア研究 (けんきゅう)。 
3. Economics - 経済学 (けいざい)。 
4. International relations - 国際関係学 (こくさいかんけい)。 
5. Computer - コンピューター。 
6. Anthropology - 人類学 (じんるいがく)。 
7. Politics - 政治学 (せいじ)。 
8. Business - ビジネス。 
9. Literature - 文学 (ぶんがく)。 
10. History - 歴史 (れきし)。 
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "kanji",
            question: "Translate into Japanese: Science",
            answer: "科学"
        },
        {
            id: "ex2",
            type: "vocabulary",
            question: "Choose the correct translation for 'Economics':",
            extra: {
                options: ["科学", "経済学", "文学"]
            },
            answer: "経済学"
        },
        {
            id: "ex3",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Anthropology'.",
            answer: "人類学"
        },
        {
            id: "ex4",
            type: "kanji",
            question: "Translate into Japanese: International relations",
            answer: "国際関係学"
        },
        {
            id: "ex5",
            type: "vocabulary",
            question: "Choose the correct translation for 'Politics':",
            extra: {
                options: ["政治学", "経済学", "文学"]
            },
            answer: "政治学"
        },
        {
            id: "ex6",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Literature'.",
            answer: "文学"
        },
        {
            id: "ex7",
            type: "typing",
            question: "Translate into Japanese: Computer",
            answer: "コンピューター"
        },
        {
            id: "ex8",
            type: "vocabulary",
            question: "Choose the correct translation for 'History':",
            extra: {
                options: ["歴史", "科学", "文学"]
            },
            answer: "歴史"
        },
        {
            id: "ex9",
            type: "kanji",
            question: "Fill in the blank: '___' means 'Economics'.",
            answer: "経済学"
        },
        {
            id: "ex10",
            type: "typing",
            question: "Translate into Japanese: Business",
            answer: "ビジネス"
        }
    ]
};
