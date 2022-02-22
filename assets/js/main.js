// lev 1_4

let eventPara = document.getElementById("eventParagraph");

eventPara.addEventListener("click", () => {
    console.log("Du hast auf den Paragraphen gelickt")
})


// lev1_5

let output = document.querySelector("h5");
let button1 = document.getElementById("clickMe");
console.log(output, clickMe);
let anzahl = 0;

button1.addEventListener("click", () => {
    anzahl++;
    button.innerHTML = `Click me: ${anzahl}`
})

// lev1_6

let output2 = document.getElementById("option-selected");
let my_select = document.getElementById("my-select");
console.log(output2, my_select);

my_select.addEventListener("change", e => {
    console.log(e.target.value);

    output2.innerHTML = `Sie haben ausgewählt ${e.target.value}`
})


// lev2_1

let zwei_eins = document.getElementById("zwei_eins");
let umschalter = document.getElementsByTagName("li");


console.log(zwei_eins, umschalter);
umschalter[0].addEventListener("click", () => {
    zwei_eins.style.background = "grey";
    zwei_eins.style.color = "white";
})
umschalter[1].addEventListener("click", () => {
    zwei_eins.style.background = "white";
    zwei_eins.style.color = "black";
})
umschalter[2].addEventListener("click", () => {
    zwei_eins.style.background = "blue";
    zwei_eins.style.color = "white";
})
umschalter[3].addEventListener("click", () => {
    zwei_eins.style.background = "yellow";
    zwei_eins.style.color = "black";
})

// lev2_2

let num = document.getElementById('num');
let keyVal = document.getElementById("keyVal")
let keyCodeVal = document.getElementById("keyCodeVal");
let codeVal = document.getElementById("codeVal")

document.body.addEventListener('keydown', (e) => {
    console.log(e)
    num.innerHTML = `  ${e.key}`;
    keyVal.innerHTML = `  ${e.key}`
    keyCodeVal.innerHTML = `  ${e.code}`
    codeVal.innerHTML = `  ${e.keyCode}`
})


// lev3_1

// 1. Change bei onclick() auf Button, funktion ist im HTML: onclick="...." - drei mal
// 2. Counter für jeden button click
// 3. ## Abruf von  Werten aus Range:
// let range = document.querySelector('[name="range"]')
//4. konvertieren aus Dezimal zu Hex: // let myHex = myNum.toString(16);

let demo = document.getElementById("demo");
let button2 = document.getElementsByTagName("button"); // meine buttons sind index1-3
console.log(button2);
let dynamic = document.getElementById("dynamic");
let rot = document.getElementById("rot");
let grun = document.getElementById("grun");
let blau = document.getElementById("blau");

console.log(rot, grun, blau);



let counter = 0;

let changeBackground = () => {
    button2[1].addEventListener("click", () => {
        console.log("test button rosa");
        dynamic.style.background = "lightpink";
    })
    button2[2].addEventListener("click", () => {
        console.log("test button violet");
        dynamic.style.background = "violet";
    })
    button2[3].addEventListener("click", () => {
        console.log("test button orange");
        dynamic.style.background = "orange";
    })


    counter++;
    demo.innerHTML = `Sie haben die Farbe ${counter} mal geändert`
}
let rotVal, grunVal, blauVal;

let changeHandle = () => {
    rot.addEventListener("change", e => {
        rotVal = (e.target.value);
        console.log(rotVal);
    })
    grun.addEventListener("change", e => {
        grunVal = (e.target.value);
        console.log(grunVal);
    })
    blau.addEventListener("change", e => {
        blauVal = (e.target.value);
        console.log(blauVal);
    })
    dynamic.style.background = `rgb(${rotVal},${grunVal},${blauVal})`;
    demo.innerHTML = `rgb(${rotVal},${grunVal},${blauVal})`

}















