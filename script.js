const starterButton = document.querySelector("#starterButton");
let feedingTime;
let newTime;


starterButton.addEventListener('click', event => {
    let hour = document.getElementById("starterHours");
    let minute = document.getElementById("starterMinutes");
    let meri = document.getElementById("starterAMPM");
    let feedingTime = createTime(hour.value, minute.value, meri.value);
    let ambientTemp = document.querySelector("#ambientTempStarter");
    
    let duration = determineDuration(ambientTemp.value);
    
    let readyTime = addDurationToTime(feedingTime, duration); 
    let resultField = document.querySelector("#starterTimeResult")   ;
    resultField.textContent = readyTime;

    if (ambientTemp.value > 90) {
        let p = document.createElement('p')
        p.textContent = "Warning: environmental temperatures above 90 will yield unpredictable results - check results frequently!";
        resultField.appendChild(p);
    }

});



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

function determineDuration (ambientTemp) {
    let duration = 0;
    if (ambientTemp >= 60 && ambientTemp <= 70) {
        duration = 480;
        return duration;
    } else if (ambientTemp >= 70 && ambientTemp <= 80) {
        duration = 240;
        return duration;
    } else if (ambientTemp >= 80 && ambientTemp <= 90) {
        duration = 60;
        return duration;
    } else if (ambientTemp >= 90) {
        duration = 30;
        return duration;
    }
}

function addDurationToTime(time, duration) {
    newTime = time.add(duration, 'minutes').format('LT');
    return newTime;
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







