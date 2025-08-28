import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Vocabulary_12: Lesson = {
    id: "n5_vocabulary_12",
    level: "N5",
    title: "Study & Reading",
    type: "vocabulary",
    content: [
        `
In this lesson, you will learn school-related and reading-related vocabulary.
    magazine - 雑誌 (ざっし)。 
    library - 図書館 (としょかん)。 
    book - 本 (ほん)。 
    newspaper - 新聞 (しんぶん)。 
    watch; clock - 時計 (とけい)。 
        `
    ],
    exercises: [
        {
            id: "ex1",
            type: "typing",
            question: "Translate into Japanese: dictionary",
            answer: "辞書"
        },
        {
            id: "ex2",
            type: "kanji",
            question: "Write in kanji: しんぶん (newspaper)",
            answer: "新聞"
        },
        {
            id: "ex3",
            type: "typing",
            question: "Translate into Japanese: book",
            answer: "本"
        },
        {
            id: "ex4",
            type: "typing",
            question: "Translate into Japanese: magazine",
            answer: "雑誌"
        },
        {
            id: "ex5",
            type: "typing",
            question: "Translate into Japanese: bicycle",
            answer: "自転車"
        },
        {
            id: "ex6",
            type: "kanji",
            question: "Write in kanji: がっこう (school)",
            answer: "学校"
        },
        {
            id: "ex7",
            type: "typing",
            question: "Translate into Japanese: library",
            answer: "図書館"
        },
        {
            id: "ex8",
            type: "vocabulary",
            question: "Choose the correct translation for 'watch/clock':",
            extra: { options: ["鞄", "時計", "帽子"] },
            answer: "時計"
        },
        {
            id: "ex9",
            type: "typing",
            question: "Translate into Japanese: cafe",
            answer: "カフェ"
        },
        {
            id: "ex10",
            type: "kanji",
            question: "Write in kanji: ざっし (magazine)",
            answer: "雑誌"
        }
    ]
};
