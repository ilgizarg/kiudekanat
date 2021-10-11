import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {QuizService} from '../../services/quiz.service';
import {of} from 'rxjs';
import {sendQuizAction, sendQuizFailureAction, sendQuizSuccessAction} from '../actions/Quiz.action';
import {QuizAnswerResponseInterface} from '../../types/quiz-answerResponse.interface';
import {HttpErrorResponse} from '@angular/common/http';


@Injectable()
export class SendQuizEffect{
  sendQuiz$ = createEffect(() => this.actions$.pipe(
    ofType(sendQuizAction),
    switchMap(({request}) => {
        return this.quizSrv.sendAnswer(request).pipe(
          map((status: QuizAnswerResponseInterface) => {
            return sendQuizSuccessAction({status});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(sendQuizFailureAction({errors: errorResponse.error.errors}));
          })
        );
      }
    )
  ));

  constructor(private actions$: Actions, private quizSrv: QuizService) {
  }
}
