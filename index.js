console.log("Welcome To Employee wage program using JS");
let IS_FULL_TIME=1;
let IS_PART_TIME=2;
let EMP_RATE_PER_HR=20;
const MAX_WORKING_DAYS=20;
let empHrs=0,totalEmpHrs=0;
let empWage=0,totalEmpWage=0;
let empInput=Math.floor((Math.random()*10)%3);

function GetEmpHours(empInput)
{ 
    switch(empInput)
    {
        case IS_FULL_TIME:
            console.log("Employee present full time");
            return empHrs=8;
            
        case IS_PART_TIME:
            console.log("Employee present part time");
            return empHrs=4;
            
        default:
            console.log("Employee is absent");
            return empHrs=0;
    }
}
for(var day=0;day<=MAX_WORKING_DAYS;day++)
{
    let empInput=Math.floor((Math.random()*10)%3);
    empWage=EMP_RATE_PER_HR*GetEmpHours(empInput);
    console.log("day "+day+" wage is "+(empHrs*EMP_RATE_PER_HR))
    totalEmpHrs+=empHrs;
}
totalEmpWage=totalEmpHrs*EMP_RATE_PER_HR;
console.log("Total Employee wage is:",totalEmpWage);
