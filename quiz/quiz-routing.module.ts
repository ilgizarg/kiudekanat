import {RouterModule, Routes} from '@angular/router';
import {QuizComponent} from './components/quiz/quiz.component';
import {authUserRoute} from '../app-routing.module';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: 'quiz',
    component: QuizComponent
  }
];

authUserRoute.push(...routes);
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule{}
