const starterButton = document.querySelector("#starterButton");
const leavenButton = document.querySelector("#leavenButton");
const doughMixButton = document.querySelector("#doughMixButton");
const fermentationButton = document.querySelector("#fermentationButton");
const benchRestButton = document.querySelector("#benchRestButton");
const proofingButton = document.querySelector("#proofingButton");
const bakeButton = document.querySelector("#bakeButton");
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
        p.textContent = `Warning: environmental temperatures above 90 
            will yield unpredictable results - check results frequently!`;
        resultField.appendChild(p);
    }
});

leavenButton.addEventListener('click', event => {
    let hour = document.getElementById("leavenMixedHours");
    let minute = document.getElementById("leavenMixedMinutes");
    let meri = document.getElementById("leavenMixedAMPM");
    let feedingTime = createTime(hour.value, minute.value, meri.value);
    let ambientTemp = document.querySelector("#ambientTempLeaven");
    let duration = determineDuration(ambientTemp.value);
    let readyTime = addDurationToTime(feedingTime, duration); 
    let resultField = document.querySelector("#leavenTimeResult")   ;
    resultField.textContent = readyTime;
    if (ambientTemp.value > 90) {
        let p = document.createElement('p')
        p.textContent = `Warning: environmental temperatures above 90 
            will yield unpredictable results - check results frequently!`;
        resultField.appendChild(p);
    }
});

doughMixButton.addEventListener('click', event => {
    let hour = document.getElementById("doughMixHours");
    let minute = document.getElementById("doughMixMinutes");
    let meri = document.getElementById("doughMixAMPM");
    let feedingTime = createTime(hour.value, minute.value, meri.value);
    let finalDoughTemp = document.querySelector("#finalDoughTempMixDough");
    let duration = determineDuration(finalDoughTemp.value);
    let autolyseLength = document.querySelector("#autolyseTime").value;
    let readyTime = addDurationToTime(feedingTime, duration, autolyseLength); 
    let resultField = document.querySelector("#doughMixTimeResult")   ;
    resultField.textContent = readyTime;
    if (finalDoughTemp.value > 90) {
        let p = document.createElement('p')
        p.textContent = `Warning: environmental temperatures above 90 
            will yield unpredictable results - check results frequently!`;
        resultField.appendChild(p);
    }
});

doughMixButton.addEventListener('click', event => {
    let hour = document.getElementById("fermentationMixHours");
    let minute = document.getElementById("fermentationMixMinutes");
    let meri = document.getElementById("fermentationMixAMPM");
    let doughMixTime = createTime(hour.value, minute.value, meri.value);
    let ambientTemp = document.querySelector("#ambientTempFermentation");
    let duration = determineDuration(ambientTemp.value);
    let readyTime = addDurationToTime(doughMixTime, duration); 
    let resultField = document.querySelector("#fermentationTimeResult")   ;
    resultField.textContent = readyTime;
    if (finalDoughTemp.value > 90) {
        let p = document.createElement('p')
        p.textContent = `Warning: environmental temperatures above 90 
            will yield unpredictable results - check results frequently!`;
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

function addDurationToTime(time, duration, autolyse = 0) {
    let total = duration + autolyse;
    newTime = time.add(total, 'minutes').format('LT');
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

    for (let i = 1; i <= 12; i++) {
        let selector = document.getElementById("leavenMixedHours");
        let option = document.createElement("OPTION");
    
        selector.options.add(option);
        option.text = i;
        option.value = i;
    }
    
    for (let i = 1; i <= 59; i++) {
        let selector = document.getElementById("leavenMixedMinutes");
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

    for (let i = 1; i <= 12; i++) {
        let selector = document.getElementById("doughMixHours");
        let option = document.createElement("OPTION");
    
        selector.options.add(option);
        option.text = i;
        option.value = i;
    }
    
    for (let i = 1; i <= 59; i++) {
        let selector = document.getElementById("doughMixMinutes");
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


    for (let i = 1; i <= 12; i++) {
        let selector = document.getElementById("fermentationMixHours");
        let option = document.createElement("OPTION");
    
        selector.options.add(option);
        option.text = i;
        option.value = i;
    }
    
    for (let i = 1; i <= 59; i++) {
        let selector = document.getElementById("fermentationMixMinutes");
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

    for (let i = 1; i <= 12; i++) {
        let selector = document.getElementById("benchRestStartHours");
        let option = document.createElement("OPTION");
    
        selector.options.add(option);
        option.text = i;
        option.value = i;
    }
    
    for (let i = 1; i <= 59; i++) {
        let selector = document.getElementById("benchRestStartMinutes");
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

    for (let i = 1; i <= 12; i++) {
        let selector = document.getElementById("benchRestEndHours");
        let option = document.createElement("OPTION");
    
        selector.options.add(option);
        option.text = i;
        option.value = i;
    }
    
    for (let i = 1; i <= 59; i++) {
        let selector = document.getElementById("benchRestEndMinutes");
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

    for (let i = 1; i <= 12; i++) {
        let selector = document.getElementById("bakeStartHours");
        let option = document.createElement("OPTION");
    
        selector.options.add(option);
        option.text = i;
        option.value = i;
    }
    
    for (let i = 1; i <= 59; i++) {
        let selector = document.getElementById("bakeStartMinutes");
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







