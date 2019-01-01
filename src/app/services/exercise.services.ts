import Exercise from '../models/exercise.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


import { map } from 'rxjs/operators';

@Injectable()
export class ExerciseService {

  api_url = 'http://localhost:3000';
  exerciseUrl = `${this.api_url}/api/workouts`;

  constructor(
    private http: HttpClient) { }

    

//Create exercise, takes a Exercise Object
createExercise(exercise: Exercise): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.exerciseUrl}`, exercise);
  }
 

//Read exercise, takes no arguments
getExercises(): Observable<Exercise[]>{
    return this.http.get(this.exerciseUrl)
    .pipe(map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Exercise[];
    }))
  }
    getExerciseByID(id:string):any{
      let getUrl = `${this.exerciseUrl}/?_id=${id}`
      return this.http.get(getUrl)
    

    }


//Update exercise, takes a Exercise Object as parameter
editExercise(exercise:Exercise){
    let editUrl = `${this.exerciseUrl}/${exercise._id}`
    //returns the observable of http put request 
    return this.http.put(editUrl, exercise);
  }


deleteExercise(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.exerciseUrl}/${id}`
    return this.http.delete(deleteUrl)
    .pipe(map(res  => {
      return res;
    }))
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    // for demo purposes only
    return Promise.reject(error.message || error);
  }


}