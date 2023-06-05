const cardNum = document.querySelector("#cardNum");
const cardName = document.querySelector("#cardName");
const cardExpDate = document.querySelector("#cardExpDate");
const cardCVC = document.querySelector("#cardCVC");


const cardHolder = document.getElementById("cardHolder");
cardHolder.addEventListener("input", updateValue);

const cardNumber = document.getElementById("cardNumber");
cardNumber.addEventListener("input", updateValue);

const expiryMonth = document.getElementById("expiryMonth");
expiryMonth.addEventListener("input", updateValue);

const expiryYear = document.getElementById("expiryYear");
expiryYear.addEventListener("input", updateValue);

const cvc = document.getElementById("cvc");
cvc.addEventListener("input", updateValue);

const form = document.querySelector("form");
form.addEventListener("submit", validate);

const completeMessage = document.getElementById("completeMessage");

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearData);

function updateValue(e){
  switch (e.currentTarget.id) {
    case "cardHolder":
      cardName.textContent = cardHolder.value;
      cardHolder.value = cardHolder.value.toUpperCase();
      break;
    case "cardNumber":
      let num = cardNumber.value;
      num = num.replace(/ +/g, "");
      num = num.split("");
      for (let i = 0; i + 4 < num.length;i += 5){
        num.splice(i + 4, 0, " ");
      }
      num = num.join("");
      num = num.substr(0, 19);
      cardNumber.value = num;
      // replace empty positions with zeros
      num = num.replace(/ +/g, "");
      let diff = 16 - num.length;
      for (let i = 0; i < diff; i++){
        num += "0";
      }
      num = num.split("");
      for (let i = 0; i + 4 < num.length; i += 5) {
        num.splice(i + 4, 0, " ");
      }
      num = num.join("");
      cardNum.textContent = num;
      break;
    case 'expiryMonth':
      let month = expiryMonth.value.substr(0, 2);
      month = month.replace(/ +/g, "");
      monthDiff = 2 - month.length;
      for (let i = 0; i < monthDiff; i++) {
        month += "0";
      }
      cardExpDate.textContent = cardExpDate.textContent.replace(/^.*\//, `${month}/`);
      expiryMonth.value = expiryMonth.value.substr(0, 2);
      break;
    case 'expiryYear':
      let year = expiryYear.value.substr(0, 2);
      year = year.replace(/ +/g, "");
      yearDiff = 2 - year.length;
      for (let i = 0; i < yearDiff; i++) {
        year += "0";
      }
      cardExpDate.textContent = cardExpDate.textContent.replace(/\/.*$/, `/${year}`);
      expiryYear.value = expiryYear.value.substr(0, 2);
      break;
    case 'cvc':
      let cvcNum = cvc.value.substr(0, 2);
      cvcNum = cvcNum.replace(/ +/g, "");
      cvcDiff = 3 - cvcNum.length;
      for (let i = 0; i < cvcDiff; i++) {
        cvcNum += "0";
      }
      cardCVC.textContent = cvcNum;
      cvc.value = cvc.value.substr(0, 3);
      break;

  }
}

function validate(e){
  e.preventDefault();
  switch ("") {
    case "":
      
      break;
    default:

  }
  form.style.display = "none";
  completeMessage.style.display = "unset";
}

function clearData(){
  form.reset();
  form.style.display = "flex";
  completeMessage.style.display = "none";
}
