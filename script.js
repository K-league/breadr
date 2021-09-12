


function createTime(hour, minute, ampm) {
    if (minute.toString().length < 2) {
        let minutes = `0${minute}`;
        let time = moment(`${hour}:${minutes}:00 ${ampm}`, 'h:mm:ss A');
        return time;
    } else {
        let minutes = minute;
        let time = moment(`${hour}:${minutes}:00 ${ampm}`, 'h:mm:ss A');
        return time;
    }

}













createTimeSelectors();
//this won't work for each section - pass id into function?
function createTimeSelectors() {
    for (let i = 1; i <= 12; i++) {
        let selector = document.getElementById("starterHours");
        let option = document.createElement("OPTION");
    
        selector.options.add(option);
        option.text = i;
        option.value = i;
    }
    
    for (let i = 1; i <= 59; i++) {
        let selector = document.getElementById("starterMinutes");
        let option = document.createElement("OPTION");
    
        selector.options.add(option);
        if (i.toString().length < 2) {
            option.text =  `${0}${i}`;
            option.value = i;
        } else {
            option.text = i;
            option.value = i;
        }
    }
}







