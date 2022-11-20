// AM/PM to 00:00:00 time format convertion

function timeConversion(s) {
    const dayNNite = s.charAt(s.length - 2) + s.charAt(s.length - 1); //AM or PM
    let bareTime;
    dayNNite == 'AM' ? ( bareTime = s.split('A')[0] ) : ( bareTime = s.split('P')[0] );
    const timeArray = bareTime.split(':');
    let numHours;
    let toReturn;
    
    if(dayNNite == 'PM' ) {
        numHours = (parseInt(timeArray[0]) + 12 ) % 24;
        numHours != 0
        ? (toReturn =  numHours.toString() + ':' + timeArray[1] + ':' + timeArray[2])
        : (toReturn =  '12' + ':' + timeArray[1] + ':' + timeArray[2])
    } else {
        timeArray[0] == '12' 
        ? toReturn = "00" + ':' + timeArray[1] + ':' + timeArray[2]
        : toReturn = bareTime;
    }
    
    return toReturn;
}

console.log(timeConversion('01:50:12PM'));