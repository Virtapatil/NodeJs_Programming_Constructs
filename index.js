console.log("Daily wage in Map object : ");
console.log(empWageUsingMap);

console.log("total wage using Map oject :");
let totalWageByMap=Array.from(empWageUsingMap.values());
console.log(totalWageByMap.reduce(getTotalWageUsingReduce,0));


let totalWageByArrow=Array.from(totalWageByMap.values()).filter(wage=>wage>0).reduce(getTotalWageUsingReduce,0);
let totalHours=(totalH,dailyWage)=>
{
    return totalH+dailyWage;
}
let totalHesByArrow=Array.from(empDayWithHrsMap.values()).reduce(totalHours,0);
console.log("Using 'Arrow' function => total Wage is: "+totalWageByArrow+" total hours worked is : "+totalHesByArrow);

let nonWorkingDays=new Array();
let fullWorkingDays=new Array();
let partWorkingDays=new Array();
//Storing days
empDayWithHrsMap.forEach((value,key,map)=>{
    if(value==0) nonWorkingDays.push(key);
    else if(value==8) fullWorkingDays.push(key);
    else partWorkingDays.push(key);
});
console.log("Showing the full workings days, part working days and no working days");
console.log("Full working days = "+fullWorkingDays);
console.log("Part working days = "+partWorkingDays);
console.log("Non working days ="+nonWorkingDays);

            console.log("Employee present full time");
            return empHrs=8;
            
        case IS_PART_TIME:
            console.log("Employee present part time");
            return empHrs=4;
            
        default:
            console.log("Employee is absent");
            return empHrs=0;
  
for(var day=0;day<=MAX_WORKING_DAYS;day++)
{
    let empInput=Math.floor((Math.random()*10)%3);
    empWage=EMP_RATE_PER_HR*GetEmpHours(empInput);
    console.log("day "+day+" wage is "+(empHrs*EMP_RATE_PER_HR))
    totalEmpHrs+=empHrs;
}
totalEmpWage=totalEmpHrs*EMP_RATE_PER_HR;
console.log("Total Employee wage is:",totalEmpWage);
}
empWage=EMP_RATE_PER_HR*GetEmpHours(empInput);
console.log("By function Employee wage is:",empWage);
}

