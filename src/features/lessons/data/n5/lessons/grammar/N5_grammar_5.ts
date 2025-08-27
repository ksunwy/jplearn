
import { Lesson } from "@/features/lessons/model/course.model";

export const N5_Grammar_5: Lesson = {
    id: "n5_grammar_5",
    level: "N5",
    "title": "Verb conjugations",
    "type": "grammar",
    "content": [
        `
5. Verb conjugations
There are 3 verb conjugations:
1st conjugation: verbs ending in ~i in their dictionary form:
〜う、
〜つ、〜る*、
～む、～ぶ、～ぬ、～く、～ぐ、～す
Examples: あう、もらう、たつ、もつ、ある、やる、まもる、よむ、のむ、
とぶ、よろこぶ、しぬ、かく、きく、およぐ、いそぐ、はなす、まわすい.
2nd conjugation: verbs ending in ~iu and ~eru** in their dictionary form
Examples: みる、おきる、もちいる、たべる、ねる、かんがえる。
3rd conjugation: two exceptions する (to do) and くる (to come).
*except for verbs ending in ~iru and ~eru
`
    ],
    "exercises": [
        {
            id: "ex1",
            type: "vocabulary",
            question: "Which group does the verb 'たべる' (to eat) belong to?",
            extra: {
                options: ["Group 1 (Godan)", "Group 2 (Ichidan)", "Group 3 (Irregular)"],
            },
            answer: "Group 2 (Ichidan)"
        },
        {
            id: "ex2",
            type: "grammar",
            question: "Conjugate the verb 'かく' (to write, Group 1) into its polite present form.",
            answer: "かきます"
        },
        {
            id: "ex3",
            type: "grammar",
            question: "Conjugate the verb 'みる' (to see, Group 2) into its polite negative form.",
            answer: "みません"
        },
        {
            id: "ex4",
            type: "grammar",
            question: "Which group does the verb 'する' (to do) belong to?",
            extra: {
                options: ["Group 1 (Godan)", "Group 2 (Ichidan)", "Group 3 (Irregular)"],
            },
            answer: "Group 3 (Irregular)"
        },
        {
            id: "ex5",
            type: "grammar",
            question: "Conjugate the verb 'のむ' (to drink, Group 1) into its past form.",
            answer: "のんだ"
        },
        {
            id: "ex6",
            type: "grammar",
            question: "Conjugate the verb 'くる' (to come, Group 3) into its polite present form.",
            answer: "きます"
        },
        {
            id: "ex7",
            type: "grammar",
            question: "The polite form 'いきます' corresponds to which dictionary form?",
            extra: {
                options: ["いく", "いける", "いこう"],
            },
            answer: "いく"
        }
    ]
};