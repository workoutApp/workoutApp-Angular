import { Response } from '@angular/http';
import { ExerciseService } from '../services/exercise.services';
import Exercise from '../models/exercise.models';
import { Component, OnInit } from '@angular/core';

// import { faCoffee } from 'font-awesome';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {

  constructor(
    // Private todoservice will be injected into the component by Angular Dependency Injector
    private exerciseService: ExerciseService
  ) { }

  // // Declaring the new exercise Object and initilizing it
  // public newExercise: Exercise = new Exercise();

  // // An Empty list for the visible exercise list
  exercisesList: Exercise[];  
  // editExercise: Exercise[] = [];


  ngOnInit(): void {

    // At component initialization the
    this.exerciseService.getExercises()
      .subscribe(exercises => {
        // assign the todolist property to the proper http response
        this.exercisesList = exercises;
      });
  }

  // // This method will get called on Create button event
  // create() {
  //   this.exerciseService.createExercise(this.newExercise)
  //     .subscribe((res) => {
  //       this.exercisesList.push(res.data);
  //       this.newExercise = new Exercise();
  //     });
  // }

  //  editExercise(exercise: Exercise) {
  //   console.log(exercise);
  //     if (this.exercisesList.includes(exercise)) {
  //     if (!this.editExercise.includes(exercise)) {
  //       this.editExercise.push(exercise);
  //     } else {
  //       this.editExercise.splice(this.editExercise.indexOf(exercise), 1);
  //       this.exerciseService.editExercise(exercise).subscribe(res => {
  //        console.log('Update Succesful');
  //        }, err => {
  //           console.error('Update Unsuccesful');
  //         });
  //        }
  //     }
  //    }

    completeExercise(exercise: Exercise) {
      exercise.complete = true;
      this.exerciseService.editExercise(exercise).subscribe(res => {
        console.log('Update Succesful');
      }, err => {
        console.error('Update Unsuccesful');
      })
    }

    incompleteExercise(exercise: Exercise) {
      exercise.complete = false;
      this.exerciseService.editExercise(exercise).subscribe(res => {
        console.log('Update Succesful');
      }, err => {
        console.error('Update Unsuccesful');
      })
    }

  //   submitTodo(event, exercise: Exercise) {
  //     if (event.keyCode === 13) {
  //       this.editTodo(exercise);
  //     }
  //   }

    deleteExercise(exercise: Exercise) {
      this.exerciseService.deleteExercise(exercise._id).subscribe(res => {
        this.exercisesList.splice(this.exercisesList.indexOf(exercise), 1);
      });
    }
}
