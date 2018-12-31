import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';

import { ExerciseService } from './services/exercise.services';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    ExerciseListComponent,
    CreateExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
