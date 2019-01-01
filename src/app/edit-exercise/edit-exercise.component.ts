import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.services';
import Exercise from '../models/exercise.models';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['./edit-exercise.component.scss']
})
export class EditExerciseComponent implements OnInit {

  constructor(
    // Private todoservice will be injected into the component by Angular Dependency Injector
    private exerciseService: ExerciseService,
    private route: ActivatedRoute
  ) { }

  theExercise: Exercise = new Exercise();


  ngOnInit(): void {

    this.route.params
      .subscribe((params: Params) => {
        if (params['id']) {
          //service call here to get the recod and assign it to this.exercise
          console.log(params["id"])
           this.exerciseService.getExerciseByID(params['id']).subscribe(res => {
            this.theExercise = res.data.docs[0];
            // console.log(res.data.docs)
             }, err => {
              //console.error('couldn't get record to edit');
          });
        };
      });
  }

  // This method will get called on Create button event

  editExcercise(exercise: Exercise) {
    console.log(exercise);
    this.exerciseService.editExercise(this.theExercise).subscribe(res => {
      console.log('Update Succesful');
    }, err => {
      console.error('Update Unsuccesful');
    });
  }

}
