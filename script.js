for (let i = 1; i <= 12; i++) {
    let selector = document.getElementById("hours");
    let option = document.createElement("OPTION");

    selector.options.add(option);
    option.text = i;
    option.value = i;
}

for (let i = 1; i <= 59; i++) {
    let selector = document.getElementById("minutes");
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





