import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from "./index/index.component";
import { ExerciseListComponent } from "./exercise-list/exercise-list.component";
import { CreateExerciseComponent } from "./create-exercise/create-exercise.component";
import { EditExerciseComponent } from './edit-exercise/edit-exercise.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'exercises', component: ExerciseListComponent },
  { path: 'exercises/new', component: CreateExerciseComponent },
  { path: 'exercises/edit/:id', component: EditExerciseComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
