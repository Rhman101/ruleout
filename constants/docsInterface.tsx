import { Timestamp } from "firebase/firestore";

export interface Doc {
    attempted: number;
    challengeName: string;
    completed: boolean;
    correct: number;
    createdAt: Timestamp;
    displayName: string;
    email: string;
    gradeDigit: string;
    successful: boolean;
    topicName: string;
}