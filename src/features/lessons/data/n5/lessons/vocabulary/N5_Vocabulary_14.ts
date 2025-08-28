import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_14: Lesson = {
    id: "n5_vocabulary_14",
    level: "N5",
    title: "Classroom expressions",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn common classroom expressions and polite requests.
    Do you understand? - わかりましたか 。 
    I understand./I understood. - わかりました。 
    I don't understand./I don't know. - わかりません。 
    Please say it slowly. - ゆっくりいってください。 
    Please say it again. - もういちどいってください。 
    Please wait. - ちょっとまってください。 
    Please listen./Please ask. - きいてください。 
    Please look at page 10. - 10ページをみてください。 
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "typing",
            question: "Translate into Japanese: Do you understand?",
            answer: "わかりましたか"
        },
        {
            id: "ex2",
            type: "typing",
            question: "Translate into Japanese: I understand",
            answer: "わかりました"
        },
        {
            id: "ex3",
            type: "typing",
            question: "Translate into Japanese: I don't understand",
            answer: "わかりません"
        },
        {
            id: "ex4",
            type: "vocabulary",
            question: "Choose the correct translation for 'Please say it slowly':",
            extra: { options: ["きいてください", "ゆっくりいってください", "ちょっとまってください"] },
            answer: "ゆっくりいってください"
        },
        {
            id: "ex5",
            type: "typing",
            question: "Translate into Japanese: Please say it again",
            answer: "もういちどいってください"
        },
        {
            id: "ex6",
            type: "typing",
            question: "Translate into Japanese: Please wait",
            answer: "ちょっとまってください"
        },
        {
            id: "ex7",
            type: "typing",
            question: "Translate into Japanese: Please listen/ask",
            answer: "きいてください"
        },
        {
            id: "ex8",
            type: "kanji",
            question: "Write in kanji: ページ (page)",
            answer: "ページ"
        },
        {
            id: "ex9",
            type: "typing",
            question: "Translate into Japanese: Please look at page 10",
            answer: "10ページをみてください"
        }
    ]
};
