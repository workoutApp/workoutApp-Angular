class Exercise {
    _id:string;
    calendarDate:Date;
    userName:string;
    exerciseName:string;
    workoutType:string;
    description:string;
    complete:Boolean;
    

    constructor(){
    
        this.userName = " ";
        this.calendarDate = new Date();
        this.userName = " ";
        this.exerciseName = " ";
        this.workoutType = " ";
        this.description = " ";
        this.complete = false;


    }
}

export default Exercise;