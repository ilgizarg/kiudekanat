export interface QuizAnswerRequestInterface {
  userId: string | number;
  quizId: string | number;
  currentAnswer: string | number | any;
}
