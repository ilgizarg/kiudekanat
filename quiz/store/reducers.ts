import {QuizStateInterface} from '../types/quizState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {
  quizAction,
  getQuizFailureAction,
  getQuizSuccessAction,
  sendQuizAction,
  sendQuizFailureAction,
  sendQuizSuccessAction
} from './actions/Quiz.action';

const initialState: QuizStateInterface = {
  isLoaded: false
};

const quizReducer = createReducer(
  initialState,
  on(quizAction,
    (state): QuizStateInterface => ({
      ...state,
      isLoaded: true,
  })),
  on(getQuizSuccessAction,
    (state, action): QuizStateInterface => ({
      ...state,
      isLoaded: false,
      quiz: action.quiz,
    })),
  on(getQuizFailureAction,
  (state, action): QuizStateInterface => ({
    ...state,
    isLoaded: false,
    validationErrors: action.errors,
  })),
  on(sendQuizAction,
    (state): QuizStateInterface => ({
      ...state,
      isLoaded: true,
    })),
  on(sendQuizSuccessAction,
    (state, action): QuizStateInterface => ({
      ...state,
      isLoaded: false,
      sendStatus: action.status,
      quiz: null
    })),
  on(sendQuizFailureAction,
    (state, action): QuizStateInterface => ({
      ...state,
      isLoaded: false,
      validationErrors: action.errors,
    }))
);

export function reducers(state: QuizStateInterface, action: Action){
  return quizReducer(state, action);
}
