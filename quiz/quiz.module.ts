import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';

import {QuizRoutingModule } from './quiz-routing.module';
import {QuizComponent} from './components/quiz/quiz.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {QuizService} from './services/quiz.service';
import {EffectsModule} from '@ngrx/effects';
import {GetQuizEffect} from './store/effects/getQuiz.effect';
import {SendQuizEffect} from './store/effects/sendQuiz.effect';
import {BackendErrorsMessagesModule} from '../shared/module/backendErrorsMessages/backendErrorsMessages.module';
import {MatCardModule} from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {LoadingBarModule} from '../shared/module/loadingBar/loadingBar.module';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [
      CommonModule,
      QuizRoutingModule,
      ReactiveFormsModule,
      StoreModule.forFeature('quiz', reducers),
      EffectsModule.forFeature([GetQuizEffect, SendQuizEffect]),
      MatCardModule,
      MatListModule,
      MatButtonModule,
      MatRadioModule,
      MatIconModule,
      MatDialogModule,
      BackendErrorsMessagesModule,
      LoadingBarModule
    ],
  declarations: [
    QuizComponent
  ],
  entryComponents: [QuizComponent],
  providers: [QuizService],
  exports: [QuizComponent]
})
export class QuizModule{ }
