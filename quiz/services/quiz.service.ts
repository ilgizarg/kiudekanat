import {Injectable} from '@angular/core';
import {QuizRequestInterface} from '../types/quiz-request.interface';
import {Observable} from 'rxjs';
import {QuizInterface} from '../types/quiz.interface';
import {HttpService} from '../../shared/services/http/http.service';
import {QuizAnswerRequestInterface} from '../types/quiz-answerRequest.interface';
import {QuizAnswerResponseInterface} from '../types/quiz-answerResponse.interface';
import {QuizResponseInterface} from '../types/quiz-response.interface';
import {map} from 'rxjs/operators';

@Injectable()
export class QuizService {
  constructor(private http: HttpService) {
  }

  qetQuiz(data: QuizRequestInterface): Observable<QuizInterface>{
    return this.http.send('get', 'quiz', data)
      .pipe(map((response: QuizResponseInterface) => response.quiz) );
  }

  sendAnswer(data: QuizAnswerRequestInterface): Observable<QuizAnswerResponseInterface> {
    return this.http.send('post', 'answer', data);
  }
}
