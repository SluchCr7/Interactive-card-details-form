let number = document.getElementById("number");
let namecard = document.getElementById("name");
let date = document.getElementById("date");
let cvc = document.getElementById("cvc");

let cardholderNameInput = document.getElementById("cardholder_name");
let cardNumberInput = document.getElementById("card_number");
let expMonthInput = document.getElementById("expMon");
let expYearInput = document.getElementById("expYer");
let cvcInput = document.getElementById("cvcinput");

let month = 0
let year = 0

cardholderNameInput.addEventListener("input", (e) => {
    namecard.innerText = e.target.value
    console.log(e.target.value)
})
cardNumberInput.addEventListener("input", (e) => {
    if (e.target.value.length > 16) {
        e.target.value = e.target.value.slice(0, 16)
    }
    else {
        number.innerText = e.target.value.slice(0, 4) + " " + e.target.value.slice(4, 8) + " " + e.target.value.slice(8, 12) + " " + e.target.value.slice(12, 16)
    }
})

expMonthInput.addEventListener("input", (e) => {
    if (e.target.value.length > 2 || e.target.value < 1 || e.target.value > 12) {
        e.target.value = e.target.value.slice(0, 2)
    }
    else {
        month = e.target.value
    }
    console.log(month)
    date.innerHTML = `${month}/${year}`
})

expYearInput.addEventListener("input", (e) => {
    if (e.target.value.length > 2 || e.target.value < 1 || e.target.value > 99) {
        e.target.value = e.target.value.slice(0, 2)
    }
    else {
        year = e.target.value
        console.log(year)
        date.innerHTML = `${month}/${year}`
    }
})

cvcInput.addEventListener("input", (e) => {
    if (e.target.value.length > 3) {
        e.target.value = e.target.value.slice(0, 3)
    }
    else {  
        cvc.innerText = e.target.value
    }
    console.log(e.target.value)
})

let btn = document.getElementById("btn")
let completed = document.getElementById("completed")
let form = document.getElementById("form")
let numberrecardgex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/
let namecardregex = /^([a-zA-Z]{5,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
console.log(numberrecardgex.test("1234 5678 9123 000r"))
btn.addEventListener("click", () => {
    if(cardholderNameInput.value == "" || cardNumberInput.value == "" || expMonthInput.value == "" || expYearInput.value == "" || cvcInput.value == ""){
        if (cardholderNameInput.value == "" || cardholderNameInput.matche(namecardregex) == false) {
            document.getElementById("name_error").classList.remove("none")
            document.getElementById("name_error").innerHTML = "Wrong format, letters only"
        }
        if (cardNumberInput.value == "" || cardNumberInput.matche(numberrecardgex) == false) {
            document.getElementById("number_error").classList.remove("none")
            document.getElementById("number_error").innerHTML = "Wrong format, numbers only"
        }
        if (expMonthInput.value == "") {
            document.getElementById("date_error").classList.remove("none")
        }
        if (expYearInput.value == "") {
            document.getElementById("date_error").classList.remove("none")
        }
        if (cvcInput.value == "") {
            document.getElementById("cvc_error").classList.remove("none")
        }
    }
    else {
        form.classList.add("none")
        completed.classList.remove("none")
    }
})