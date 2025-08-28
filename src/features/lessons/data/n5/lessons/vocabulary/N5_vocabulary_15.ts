import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_15: Lesson = {
    id: "n5_vocabulary_15",
    level: "N5",
    title: "Daily Life & Time",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn words for daily life, time, and routines.
    morning - 朝 (あさ) 。 
    tomorrow - 明日 (あした) 。 
    when - いつ 。 
    today - 今日 (きょう) 。 
    about -  ごろ 。 
    tonight - 今夜 (こんや) 。 
    weekend - 週末 (しゅうまつ) 。 
    to get up - 起きる(おきる) 。 
    usually - たいてい 。 
    but - でも 。 
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "typing",
            question: "Translate into Japanese: morning",
            answer: "朝"
        },
        {
            id: "ex2",
            type: "kanji",
            question: "Write in kanji: きょう (today)",
            answer: "今日"
        },
        {
            id: "ex3",
            type: "typing",
            question: "Translate into Japanese: tomorrow",
            answer: "明日"
        },
        {
            id: "ex4",
            type: "typing",
            question: "Translate into Japanese: tonight",
            answer: "今夜"
        },
        {
            id: "ex5",
            type: "typing",
            question: "Translate into Japanese: weekend",
            answer: "週末"
        },
        {
            id: "ex6",
            type: "typing",
            question: "Translate into Japanese: when",
            answer: "いつ"
        },
        {
            id: "ex7",
            type: "vocabulary",
            question: "Choose the correct translation for 'usually':",
            extra: { options: ["でも", "たいてい", "おいしい"] },
            answer: "たいてい"
        },
        {
            id: "ex8",
            type: "typing",
            question: "Translate into Japanese: but",
            answer: "でも"
        },
        {
            id: "ex9",
            type: "kanji",
            question: "Write in kanji: おきる (to get up)",
            answer: "起きる"
        },
        {
            id: "ex10",
            type: "vocabulary",
            question: "Choose the correct translation for 'today':",
            extra: { options: ["昨日", "今日", "明日"] },
            answer: "今日"
        }
    ]
};
