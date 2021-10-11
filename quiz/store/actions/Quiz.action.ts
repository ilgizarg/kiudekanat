import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {QuizRequestInterface} from '../../types/quiz-request.interface';
import { QuizInterface } from '../../types/quiz.interface';
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface';
import {QuizAnswerRequestInterface} from '../../types/quiz-answerRequest.interface';
import {QuizAnswerResponseInterface} from '../../types/quiz-answerResponse.interface';

export const quizAction = createAction(
  ActionTypes.GET_QUIZ,
  props<{request: QuizRequestInterface}>()
);

export const getQuizSuccessAction = createAction(
  ActionTypes.GET_QUIZ_SUCCESS,
  props<{quiz: QuizInterface}>()
);

export const getQuizFailureAction = createAction(
  ActionTypes.GET_QUIZ_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);

export const sendQuizAction = createAction(
  ActionTypes.SEND_QUIZ,
  props<{request: QuizAnswerRequestInterface}>()
);

export const sendQuizSuccessAction = createAction(
  ActionTypes.SEND_QUIZ_SUCCESS,
  props<{status: QuizAnswerResponseInterface}>()
);

export const sendQuizFailureAction = createAction(
  ActionTypes.SEND_QUIZ_FAILURE,
  props<{errors: BackendErrorsInterface}>()
);
