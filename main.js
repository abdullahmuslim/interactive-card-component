const cardNum = document.querySelector("#cardNum");
const cardName = document.querySelector("#cardName");
const cardExpDate = document.querySelector("#cardExpDate");
const cardCVC = document.querySelector("#cardCVC");

const inputs = [...document.querySelectorAll("input")];
inputs.map(input => {
  input.addEventListener("input", updateValue);
  input.addEventListener("input", clearWarning);
})

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
  let testPassed = true;
  for (let input of inputs) {
    if (input.value === ""){
     setWarning(input, "Can't be blank");
     testPassed = false;
     continue;
    }
    
    switch (input.id) {
      case "cardHolder":
        let name = input.value.replace(/ +/g, "");
        if(name.match(/[^a-zA-Z]/g)){
          setWarning(input, "Wrong format, letters only");
          testPassed = false;
        }
        break;
      case "cardNumber":
        let cardNum = input.value.replace(/ +/g, "");
        if(cardNum.match(/[^0-9]/g)){
          setWarning(input, "Wrong format, numbers only");
          testPassed = false;
        }else if(cardNum.length < 16){
          setWarning(input, "Incomplete card number");
          testPassed = false;
        }
        break;
      case "expiryMonth":
        let month = input.value.replace(/ +/g, "");
        if (month.match(/[^0-9]/g)){
          setWarning(input, "Wrong format, numbers only");
          testPassed = false;
        }else if(parseInt(month) === 0 || parseInt(month) > 12){
          setWarning(input, "Must be a valid date");
          testPassed = false;
        }
        break;
      case "expiryYear":
        let year = input.value.replace(/ +/g, "");
        if (year.match(/[^0-9]/g)) {
          setWarning(input, "Wrong format, numbers only")
          testPassed = false;
        }else if(parseInt(year) === 0){
          setWarning(input, "Must be a valid date");
          testPassed = false;
        }
        break;
      case "cvc":
        let cvc = input.value.replace(/ +/g, "");
        if(cvc.match(/[^0-9]/g)){
          setWarning(input, "Wrong format, numbers only");
          testPassed = false;
        }
        break;
    }
  }
  if (testPassed){
    form.style.display = "none";
    completeMessage.style.display = "unset";
  }
}

function clearData(){
  form.reset();
  form.style.display = "flex";
  completeMessage.style.display = "none";
  cardNum.textContent = "0000 0000 0000 0000";
  cardName.textContent = "Jane Appleseed";
  cardExpDate.textContent = "00/00";
  cardCVC.textContent = "000";
  
}

function setWarning(input, message){
  const parent = input.parentElement;
  parent.lastElementChild.textContent = message;
}
function clearWarning(e){
  const parent = e.currentTarget.parentElement;
  parent.lastElementChild.textContent = "";
}