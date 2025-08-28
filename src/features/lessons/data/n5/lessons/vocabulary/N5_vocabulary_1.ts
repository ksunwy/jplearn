import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_1: Lesson = {
    id: "n5_vocabulary_1",
    level: "N5",
    title: "Daily Routine",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn words related to daily routines.

1. Good morning - おはよう。 
2. Good morning (polite) - おはようございます。 
3. Good afternoon - こんにちは。 
4. Good evening - こんばんは。 
5. Good night - おやすみ(なさい)。 
6. I'll go and come back - 行ってきます (いってきます)。 
7. Please go and come back - 行ってらっしゃい。 
8. I'm home - ただいま。 
9. Welcome home - お帰り(なさい) (おかえり)。 
10. Thank you for the meal (before eating) - いただきます。 
11. Thank you for the meal (after eating) - ごちそうさま(です)。 
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "typing",
            question: "Translate into Japanese: Good evening",
            answer: "こんばんは"
        },
        {
            id: "ex2",
            type: "vocabulary",
            question: "Choose the correct translation for 'I'm home':",
            extra: {
                options: ["ただいま", "おかえり", "いただきます"]
            },
            answer: "ただいま"
        },
        {
            id: "ex3",
            type: "typing",
            question: "Fill in the blank: '___' means 'I'll go and come back'.",
            answer: "行ってきます"
        },
        {
            id: "ex4",
            type: "typing",
            question: "Translate into Japanese: Thank you for the meal (after eating)",
            answer: "ごちそうさま"
        },
        {
            id: "ex5",
            type: "vocabulary",
            question: "Choose the correct translation for 'Welcome home':",
            extra: {
                options: ["ただいま", "おかえり", "いただきます"]
            },
            answer: "おかえり"
        },
        {
            id: "ex6",
            type: "typing",
            question: "Fill in the blank: '___' means 'Good morning' politely.",
            answer: "おはようございます"
        },
        {
            id: "ex7",
            type: "typing",
            question: "Translate into Japanese: Good afternoon",
            answer: "こんにちは"
        },
        {
            id: "ex8",
            type: "typing",
            question: "Fill in the blank: '___' means 'Please go and come back'.",
            answer: "行ってらっしゃい"
        },
        {
            id: "ex9",
            type: "typing",
            question: "Translate into Japanese: Thank you for the meal (before eating)",
            answer: "いただきます"
        },
        {
            id: "ex10",
            type: "vocabulary",
            question: "Choose the correct translation for 'Good night':",
            extra: {
                options: ["おはよう", "おやすみ", "こんにちは"]
            },
            answer: "おやすみ"
        }
    ]
};
