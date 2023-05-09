type WorkInfoType = {
    workName:string;
    timeInHour:number;
    workType:string
};

const learningWork:WorkInfoType={
    workName:"Learning",
    timeInHour:3,
    workType:"In House/Remote"
};

const officeWork:WorkInfoType={
    workName:"Office", 
    timeInHour:8,
    workType:"In Office"
};

const projectOrPartTime={
    workName:"Project or Part Time",
    timeInHour:3,
    workType:"Remote"
}

type OperationType = (x:number, y:number)=>number;

function calculate (number1:number, number2:number, operation:OperationType){
    return operation(number1, number2);
}

type CourseType = string;
type CompleteStatus=boolean;

const runningCourse:CourseType="Next Level Web Development";
const isCourseComplete:CompleteStatus=false;