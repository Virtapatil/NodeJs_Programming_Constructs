let total=0;
function getTotalWage(dailyWage)
{
    total+=dailyWage;
}
empDailyWageArray.forEach(getTotalWage);
console.log(" Total Wage using Array forEach helper func: "+total);

//Calculate total Wage using Array reduce method
function getTotalWageUsingReduce(dailyWage,totalWage)
{
    return totalWage+=dailyWage;
}
console.log(" Total Wage using Array reduce helper func : "+empDailyWageArray.reduce(getTotalWageUsingReduce,0));

//Show the Day along with Daily Wage using Array map helper function
let dayCount=0;
function mapDayWithWage(dailyWage)
{
    dayCount++;
    return "Day:"+dayCount+" Wage:"+dailyWage;
}
let mapDayWithWageArray=empDailyWageArray.map(mapDayWithWage);
console.log("Show the Day along with Daily Wage using Array map helper function\n");
console.log(mapDayWithWageArray);

//Show Days when Full time wage of 160 were earned using filter function
function showFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArray=mapDayWithWageArray.filter(showFullTimeWage);
console.log("Show Days when Full time wage:");
console.log(fullDayWageArray);

function findFirstFullTime(dailyWage)
{
    return dailyWage.includes("160")
}
console.log(" first occurrence of Full Time Wage :\n"+mapDayWithWageArray.find(findFirstFullTime));
console.log(" Check if Every Element of Full Time Wage is truly holding Full time wage:\n"+fullDayWageArray.every(findFirstFullTime));

// Check if there is any Part Time Wage
function isAnyPartTime(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("Check if there is any Part Time Wage :\n"+mapDayWithWageArray.some(isAnyPartTime));

//Calculate  how many days employee worked
function howManyDaysWorked(days,dailyWage)
{
    if(dailyWage>0)  
        return days=days+1
    else
        return days;
}
console.log(" How many days employee worked");
console.log(empDailyWageArray.reduce(howManyDaysWorked,0));

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
