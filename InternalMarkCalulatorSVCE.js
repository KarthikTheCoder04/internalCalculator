let fat1El = document.getElementById("fat1");
let fat2El = document.getElementById("fat2");
let fat3El = document.getElementById("fat3");
let ass1El = document.getElementById("ass1");
let ass2El = document.getElementById("ass2");
let ass3El = document.getElementById("ass3");
let fat1ErrMsgEl = document.getElementById("fat1ErrMsg");
let fat2ErrMsgEl = document.getElementById("fat2ErrMsg");
let fat3ErrMsgEl = document.getElementById("fat3ErrMsg");
let ass1ErrMsgEl = document.getElementById("ass1ErrMsg");
let ass2ErrMsgEl = document.getElementById("ass2ErrMsg");
let ass3ErrMsgEl = document.getElementById("ass3ErrMsg");
let Myform = document.getElementById("addUserForm");
let bgCon = document.getElementById("calBg");

let sumbitBtnEl = document.getElementById("btnSubmit")
let resultEl = document.getElementById("Result");
let fatSectionEl = document.getElementById("fatSection");
let assSectionEl = document.getElementById("assSection");
let fatButtonEl = document.getElementById("fatButton");
let assButtonEl = document.getElementById("assButton");

let fat1;
let fat2;
let fat3;
let ass1;
let ass2;
let ass3;


function toCalInternalMark() {
    const fat_marks = [fat1, fat2, fat3];
    const ass_marks = [ass1, ass2, ass3];
    const total = [];

    for (let a = 0; a < 3; a++) {
        total[a] = 0.7 * fat_marks[a] + 0.3 * ass_marks[a];
    }

    let sum = 0;
    for (let t of total) {
        console.log(t);
        sum += t;
    }

    let mark = (sum / 3) * 0.8; // Calculating the average of total values and then multiplying by 0.8
    console.log(typeof(mark));
    console.log(mark);

    resultEl.textContent = "Congratulation!,You have scored " + mark.toFixed(2);





}

function Valid() {
    if (fat1El.value === "") {
        fat1ErrMsgEl.textContent = "Required*";
    }
    if (fat2El.value === "") {
        fat2ErrMsgEl.textContent = "Required*";
    }
    if (fat3El.value === "") {
        fat3ErrMsgEl.textContent = "Required*";
    }
    if (ass1El.value === "") {
        ass1ErrMsgEl.textContent = "Required*";
    }
    if (ass2El.value === "") {
        ass2ErrMsgEl.textContent = "Required*";
    }
    if (ass3El.value === "") {
        ass3ErrMsgEl.textContent = "Required*";
    }
}

fat1El.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        fat1ErrMsgEl.textContent = "Required*";
    } else {
        fat1ErrMsgEl.textContent = "";
        fat1 = (parseInt(fat1El.value));

    }
})
fat3El.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        fat3ErrMsgEl.textContent = "Required*";
    } else {
        fat3ErrMsgEl.textContent = "";
        fat3 = (parseInt(fat3El.value));
    }

})
fat2El.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        fat2ErrMsgEl.textContent = "Required*";
    } else {
        fat2ErrMsgEl.textContent = "";
        fat2 = (parseInt(fat2El.value));
    }
})
ass1El.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        ass1ErrMsgEl.textContent = "Required*";
    } else {
        ass1ErrMsgEl.textContent = "";
        ass1 = (parseInt(ass1El.value));
    }
})
ass2El.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        ass2ErrMsgEl.textContent = "Required*";
    } else {
        ass2ErrMsgEl.textContent = "";
        ass2 = (parseInt(ass2El.value));
    }
})
ass3El.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        ass3ErrMsgEl.textContent = "Required*";
    } else {
        ass3ErrMsgEl.textContent = "";
        ass3 = (parseInt(ass3El.value));
    }
});


sumbitBtnEl.addEventListener("click", function(event) {
    bgCon.style.height = 100;
    Valid();

    if (ass3 !== undefined && ass1 !== undefined && ass2 !== undefined && fat1 !== undefined && fat3 !== undefined && fat2 !== undefined) {
        toCalInternalMark();
    } else if (ass1 > 50 || ass2 > 50 || ass3 > 50 || fat2 > 50 || fat1 > 50 || fat3 > 50) {
        resultEl.textContent = "Maximum Mark Is 50";
    } else if (fat1 === undefined || fat2 === undefined || fat3 === undefined) {
        resultEl.textContent = "Enter The FAT Mark";

    } else if (ass1 === undefined || ass2 === undefined || ass3 === undefined) {
        resultEl.textContent = "Enter The Assignment Mark";

    }

})

function about() {
    fatSectionEl.classList.add("d-block");
    assSectionEl.classList.remove("d-block");
    fatButtonEl.style.backgroundColor = "white";
    assButtonEl.style.backgroundColor = "#a81cff";
    assButtonEl.style.color = "white";
    fatButtonEl.style.color = "black";
}
about();

function assMark() {
    fatSectionEl.classList.remove("d-block");
    assSectionEl.classList.add("d-block");
    fatButtonEl.style.backgroundColor = "#a81cff";
    assButtonEl.style.backgroundColor = "white";
    fatButtonEl.style.color = "white";
    assButtonEl.style.color = "black";
}