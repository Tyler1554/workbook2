

var hoursWorked = 45;
var payRate = 17.30;
var grossPay = 0;
var payBeforeOverTime = hoursWorked*payRate;
var overTimeHours = hoursWorked-40;
var overTimePay = overTimeHours*1.5;

if(hoursWorked <= 40){
    grossPay=hoursWorked*payRate;
}
else{
    grossPay= overTimePay + payBeforeOverTime;
}

console.log(grossPay);
