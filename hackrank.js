/*  
1.JS Dates 
Take a date input like "10/11/2009" and retuen what day is it 
*/

function getDayName(dateString) {
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = new Date(dateString)
    let dayIndex = day.getDay()

    
    return dayName[dayIndex];
}
console.log(getDayName("/09/24/2025"));

/* Explanation: In JS new Date is a method you are watching in line number 8. It will show you what date is today. And getDay() is another method is showing date in number (0-6) 
0 = Sunday

1 = Monday

2 = Tuesday

3 = Wednesday

4 = Thursday

5 = Friday

6 = Saturday*/