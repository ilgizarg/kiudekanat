import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../shared/types/appState.inteface';
import {QuizStateInterface} from '../types/quizState.interface';

export const quizFeatureSelector = createFeatureSelector<AppStateInterface,
  QuizStateInterface>('quiz');

export const isLoadedSelector = createSelector(
  quizFeatureSelector,
  (quizState: QuizStateInterface) => quizState.isLoaded);

export const quizSelector = createSelector(quizFeatureSelector,
  (quizState: QuizStateInterface) => quizState.quiz);


export const answerStatusSelector = createSelector(quizFeatureSelector,
  (quizState: QuizStateInterface) => quizState.sendStatus);

export const validationErrorsSelector = createSelector(quizFeatureSelector,
  (quizState: QuizStateInterface) => quizState.validationErrors);
