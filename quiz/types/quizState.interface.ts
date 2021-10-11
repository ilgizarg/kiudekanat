import {QuizInterface} from './quiz.interface';
import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface';
import {QuizAnswerResponseInterface} from './quiz-answerResponse.interface';

export interface QuizStateInterface {
  isLoaded: boolean;
  quiz?: QuizInterface;
  sendStatus?: QuizAnswerResponseInterface;
  validationErrors?: BackendErrorsInterface;
}
