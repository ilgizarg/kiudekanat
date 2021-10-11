import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {FormBuilder,  FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {select, Store} from '@ngrx/store';
import {quizAction, sendQuizAction} from '../../store/actions/Quiz.action';
import {QuizAnswerRequestInterface} from '../../types/quiz-answerRequest.interface';
import {AuthService} from '../../../auth/services/auth.service';
import {Observable} from 'rxjs';
import {
  answerStatusSelector,
  isLoadedSelector,
  quizSelector,
  validationErrorsSelector
} from '../../store/selectors';
import {QuizInterface} from '../../types/quiz.interface';
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface';
import {map} from 'rxjs/operators';
import {QuizAnswerResponseInterface} from '../../types/quiz-answerResponse.interface';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-kiu-dekanat-quiz',
  templateUrl: 'quiz.component.html',
  styleUrls: ['quiz.component.scss'],
})
export class QuizComponent  implements OnInit  {
  /**
   * Form for Quiz:
   * questions? - only one;
   * answers variant? - min 3, max 5;
   *  type of answers? - possible only one answer
   **/

  @ViewChild('quizDialog') dialogTemplate: ElementRef;
  userId: string | number;
  form: FormGroup;
  isLoaded$: Observable<boolean>;
  quiz$: Observable<QuizInterface | null>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  answerStatus$: Observable<QuizAnswerResponseInterface>;

  constructor(private fb: FormBuilder,
              private router: Router,
              private store: Store,
              private user: AuthService,
              public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getQuiz();
    this.initValues();
    //this.initForm();
  }


  initValues(): void{
    this.userId = this.user.getUser().personId;
    this.isLoaded$ = this.store.pipe(select(isLoadedSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.quiz$ = this.store.pipe(select(quizSelector), map((resp) => {
      if (resp){
        this.form = this.fb.group({
          quizId: resp.quizId ,
          answer: '',
        });
      }
      return resp;
    }));

    this.answerStatus$ = this.store.pipe(select(answerStatusSelector));
  }


  getQuiz(): void {
      this.store.dispatch(quizAction({request: {userId: this.userId}}));
  }

  onSubmit(): void {

    const props: QuizAnswerRequestInterface = {
      quizId: this.form.get('quizId').value.toString(),
      userId: this.userId,
      currentAnswer: this.form.get('answer').value,
    };

    this.store.dispatch(sendQuizAction({request: props}));
  }

  closeQuiz(): void {
    this.dialogTemplate.nativeElement.hidden = true;
  }

}
