function updateTime() {

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
"h:mm:ss")} <small>${losAngelesTime.format("A")}</small>`;



let bernElement = document.querySelector("#bern");
let bernDateElement = bernElement.querySelector(".date");
let bernTimeElement = bernElement.querySelector(".time");
let bernTime = moment().tz("Europe/Zurich");

bernDateElement.innerHTML = bernTime.format("MMMM Do YYYY");
bernTimeElement.innerHTML = `${bernTime.format(
"h:mm:ss")} <small>${bernTime.format("A")}</small>`;

}

updateTime();
setInterval(updateTime, 1);

