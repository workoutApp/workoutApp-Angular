import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { EditExerciseComponent } from './edit-exercise/edit-exercise.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';

import { ExerciseService } from './services/exercise.services';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    EditExerciseComponent,
    ExerciseListComponent,
    CreateExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
