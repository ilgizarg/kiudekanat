import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {quizAction, getQuizFailureAction, getQuizSuccessAction} from '../actions/Quiz.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {QuizService} from '../../services/quiz.service';
import {QuizInterface} from '../../types/quiz.interface';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class GetQuizEffect{
  getQuiz$ = createEffect(() => this.actions$.pipe(
    ofType(quizAction),
    switchMap(({request}) => {
        return this.quizSrv.qetQuiz(request).pipe(
          map((quiz: QuizInterface) => {
            return getQuizSuccessAction({quiz});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getQuizFailureAction({errors: errorResponse.error}));
          })
        );
    }
    )
  ));

  constructor(private actions$: Actions, private quizSrv: QuizService) {
  }
}
