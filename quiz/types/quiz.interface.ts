import {AnswerInterface} from './answer.interface';

export interface QuizInterface {
  quizId: string;
  quizType: number; // 1 - only one, 2 - multi, 3 - open answer
  question: string;
  answers?: [AnswerInterface];
}
