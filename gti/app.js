//Our Varables
const moneyEntered = document.querySelector("#money-entered");
const submitButton = document.querySelector("#submit-btn");
const moneyInput = document.querySelector("#money-input");
const moneyOutput = document.querySelector("#money-output");
const dateInput__yeaer = document.querySelector("#date-year");
const dateInput__month = document.querySelector("#date-month");
const dateInput__day = document.querySelector("#date-day");
const infoInput = document.querySelector("#textarea");
const inputDiv = document.querySelector(".input");
const outputDiv = document.querySelector(".output");
const moneyCountInput = document.querySelector("#money-entered");
const mainModal = document.querySelector(".modal-main");
const modalBg = document.querySelector(".modal-bg");
const showModal = document.querySelector(".modal-content-show");
const removeModal = document.querySelector(".modal-content-remove");
const modalInnerTextParent = document.querySelector(".row2-show");
const showModalCloseButton = document.querySelector("#show-modal-close-btn");
const showModalBackButton = document.querySelector("#show-modal-back-btn");
const removeModalCloseButton = document.querySelector("#remove-modal-close-btn");
const removeModalBackButton = document.querySelector("#remove-modal-back-btn");
const removeModalRemoveButton = document.querySelector("#remove-modal-remove-btn");
const table = document.querySelector("#table-main");
const tableTr = document.createElement("tr");
const chart = document.querySelector("#myChart");
const userIncome = document.querySelector("#user-income");
const userOutcome = document.querySelector("#user-outcome");
const alert = document.querySelector(".alert");
const alertError = document.querySelector("#alert-error-text");


//Table Generator Function
function tableRowGenerator(moneyCount , date , moneyType , rowCount) {

    const tableTr = document.createElement("tr");
    table.appendChild(tableTr);
    tableTr.classList.add("t-list");

    const tableInfo = document.createElement("td");
    tableInfo.innerHTML = "<button class='table-remove-btn'>حذف</button><button class='table-show-btn'>نمایش</button>";
    tableTr.appendChild(tableInfo);

    const tableMoneyType = document.createElement("td");
    tableMoneyType.textContent = moneyType;
    tableTr.appendChild(tableMoneyType);

    const tableDate = document.createElement("td");
    tableDate.textContent = date;
    tableTr.appendChild(tableDate);

    const tableMoney = document.createElement("td");
    tableMoney.textContent = moneyCount;
    tableTr.appendChild(tableMoney);

    const tableRowNumber = document.createElement("td");
    tableRowNumber.classList.add("table-row-number");
    tableRowNumber.textContent = rowCount;
    tableTr.appendChild(tableRowNumber);
};

//alert Generator
function alertGenerator(text) {
    alert.classList.remove("alert-hide");
    alert.classList.add("alert-show" , "animate__animated" , "animate__fadeInRight");
    alertError.textContent = text;

    //varaibles
    const loadingBar = document.querySelector("#loading-bar");
    let loadingBarPercent = 100;

    //loadingBar IncresrFunction
    setInterval(() => {
        if (loadingBarPercent >= 0) {
            loadingBarPercent--;
            loadingBar.value = loadingBarPercent;
            
        } else {
            clearInterval();

        }
    }, 40);

    setTimeout(() => {
        alert.classList.remove("alert-show" , "animate__animated" , "animate__fadeInRight");
        alert.classList.add("alert-hide");
        
    }, 4000);
};


//applying some details function to inputDiv
inputDiv.addEventListener("click" , () => {

    //checking MoneyOutput input checked or not
    if (moneyOutput.checked) {
        
        //user selected MoneyOutput 
        //change moneyOutput value to Unchecked
        moneyOutput.checked = false;

        //change outPutDiv Style
        outputDiv.style.border = "1px solid gray";
        outputDiv.style.boxShadow = "";

    } else {

        //user selected MoneyInput
        //add style to inputDiv
        inputDiv.style.border = "1px solid rgb(20, 170, 20)";
        inputDiv.style.boxShadow = "0px 0px 5px rgba(20, 170, 20, .5)";
    }

    if (moneyInput.checked) {
        inputDiv.style.border = "1px solid rgb(20, 170, 20)";
        inputDiv.style.boxShadow = "0px 0px 5px rgba(20, 170, 20, .5)";
    } else {
        inputDiv.style.border = "1px solid gray";
        inputDiv.style.boxShadow = "";
    }

});


//applying some details function to outputDiv
outputDiv.addEventListener("click" , () => {

    //checking MoneyInput input checked or not
    if (moneyInput.checked) {
        
        //user selected MoneyInput 
        //change moneyInput value to Unchecked
        moneyInput.checked = false;

        //change InPutDiv Style
        inputDiv.style.border = "1px solid gray";
        inputDiv.style.boxShadow = "";

    } else {

        //user selected MoneyOuput
        //add style to inputDiv
        outputDiv.style.border = "1px solid rgb(20, 170, 20)";
        outputDiv.style.boxShadow = "0px 0px 5px rgba(20, 170, 20, .5)";
    }

    if (moneyOutput.checked) {
        outputDiv.style.border = "1px solid rgb(20, 170, 20)";
        outputDiv.style.boxShadow = "0px 0px 5px rgba(20, 170, 20, .5)";
    } else {
        outputDiv.style.border = "1px solid gray";
        outputDiv.style.boxShadow = "";
    }

});

const moneyCountInputTomanDisplayParent = document.querySelector(".money-count-display");
const moneyCountInputTomanDisplay = document.createElement("span");
moneyCountInputTomanDisplayParent.appendChild(moneyCountInputTomanDisplay);

//money Amount TOMAN Converter
moneyCountInput.addEventListener("click" , (e) => {

    //moneyCountInputTomanDisplay.textContent
    setInterval(() => {
        let num = moneyCountInput.value;
        let str = num.toString().split('.');
        if (str[0].length >= 4) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 4) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        let filtered = str.join('.');

        if (num != "") {
            moneyCountInputTomanDisplay.textContent = "معادل" + " " + filtered + " " + "تومان";
        } else {
            moneyCountInputTomanDisplay.textContent = "";
        }
    }, 125);
});


//UserDatas Submit Button
submitButton.addEventListener("click" , () => {
    if (moneyInput.checked || moneyOutput.checked) {
        if (moneyEntered.value != "") {
            if (dateInput__yeaer.value == 1401) {
                if (dateInput__month.value >= 1 && dateInput__month.value <= 12) {
                    if (dateInput__day.value >= 1 && dateInput__day.value <= 31) {
                        //checking user selected with one of MoneyTypes
                        let moneyType;
                        if (moneyInput.checked) {
                            moneyType = "هزینه";
                        } else {
                            moneyType = "درآمد";
                        }

                        //load userDatas object **our main datas
                        const userDatas = localStorage.getItem("userDatas");

                        //convert our datas to readable datas
                        let transactions = JSON.parse(userDatas);

                        //checking userDatas Array is empty or not
                        if (userDatas) {
                            //userDatas Array is not empty

                            //set new values on our main data arrays
                            transactions = [...transactions, {type:moneyType , amount:moneyEntered.value , date: {year: dateInput__yeaer.value , month: dateInput__month.value , day: dateInput__day.value}, info:infoInput.value}];
                        } else {
                            //userDatas Array is empty

                            //set our first data
                            transactions = [{type:moneyType , amount:moneyEntered.value , date: {year: dateInput__yeaer.value , month: dateInput__month.value , day: dateInput__day.value}, info:infoInput.value}];
                        }

                        //set our new datas on local storage
                        localStorage.setItem("userDatas" , JSON.stringify(transactions));

                        location.reload();
                    } else {
                        alertGenerator("مقدار روز ورودی باید عددی بین 1 تا 31 باشد");
                    }
                } else {
                    alertGenerator("مقدار ماه ورودی باید عددی بین 1 تا 12 باشد");
                }
            } else {
                alertGenerator("مقدار سال ورودی حتما باید 1401 باشد");
            }
        } else {
            alertGenerator("لطفا مقداری را برای مبلغ وارد کنید");
        }
    } else {
        alertGenerator("لطفا یکی از گزینه های درآمد یا هزینه را انتخاب کنید");
    }
});


const tx = JSON.parse(localStorage.getItem("userDatas"));
tx.map((item) => {
    const amoutFromLocalStorage = item.amount;
    const typeFromLocalStorage = item.type;
    const yearFromLocalStorage = item.date.year;
    const monthFromLocalStorage = item.date.month;
    const dayFromLocalStorage = item.date.day;
    const dateFromLocalStorage = `${yearFromLocalStorage}/${monthFromLocalStorage}/${dayFromLocalStorage}`;
    const rowNumberFromLocalStorage = tx.indexOf(item);


    let num3 = amoutFromLocalStorage;
    let str3 = num3.toString().split('.');
    if (str3[0].length >= 4) {
        str3[0] = str3[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str3[1] && str3[1].length >= 4) {
        str3[1] = str3[1].replace(/(\d{3})/g, '$1 ');
    }
    let amoutFromLocalStorageMain = str3.join('.');

    tableRowGenerator(amoutFromLocalStorageMain,dateFromLocalStorage,typeFromLocalStorage,rowNumberFromLocalStorage);    

});

const tableShowButton = document.querySelectorAll(".table-show-btn");
const tableRemoveButton = document.querySelectorAll(".table-remove-btn");
const modalInnerText = document.createElement("p");
modalInnerTextParent.appendChild(modalInnerText);

tableShowButton.forEach((item) => {
    item.addEventListener("click" , () => {

        mainModal.classList.remove("modal-hide");
        mainModal.classList.add("modal-show");

        modalBg.classList.remove("modal-hide");
        modalBg.classList.add("modal-show");

        showModal.classList.remove("modal-hide");
        showModal.classList.add("modal-show");

        modalInnerText.textContent = tx[item.parentElement.parentElement.querySelector(".table-row-number").innerHTML].info;

        showModalBackButton.addEventListener("click" , () => {

            showModal.classList.remove("modal-show");
            showModal.classList.add("modal-hide");

            modalBg.classList.remove("modal-show");
            modalBg.classList.add("modal-hide");

            mainModal.classList.remove("modal-show");
            mainModal.classList.add("modal-hide");
        });

        showModalCloseButton.addEventListener("click" , () => {

            showModal.classList.remove("modal-show");
            showModal.classList.add("modal-hide");

            modalBg.classList.remove("modal-show");
            modalBg.classList.add("modal-hide");

            mainModal.classList.remove("modal-show");
            mainModal.classList.add("modal-hide");
        });
        
    });
})

tableRemoveButton.forEach((item) => {
    item.addEventListener("click" , () => {

    
        mainModal.classList.remove("modal-hide");
        mainModal.classList.add("modal-show");

        modalBg.classList.remove("modal-hide");
        modalBg.classList.add("modal-show");

        removeModal.classList.remove("modal-hide");
        removeModal.classList.add("modal-show");

        removeModalCloseButton.addEventListener("click" , () => {

            removeModal.classList.remove("modal-remove");
            removeModal.classList.add("modal-hide");

            modalBg.classList.remove("modal-show");
            modalBg.classList.add("modal-hide");

            mainModal.classList.remove("modal-show");
            mainModal.classList.add("modal-hide");
        });

        removeModalBackButton.addEventListener("click" , () => {
            removeModal.classList.remove("modal-remove");
            removeModal.classList.add("modal-hide");

            modalBg.classList.remove("modal-show");
            modalBg.classList.add("modal-hide");

            mainModal.classList.remove("modal-show");
            mainModal.classList.add("modal-hide");
        });

        removeModalRemoveButton.addEventListener("click" , () => {
            removeModal.classList.remove("modal-remove");
            removeModal.classList.add("modal-hide");

            modalBg.classList.remove("modal-show");
            modalBg.classList.add("modal-hide");

            mainModal.classList.remove("modal-show");
            mainModal.classList.add("modal-hide");

            let rowNumberToRemove =  item.parentElement.parentElement.querySelector(".table-row-number").textContent;
            tx.splice(rowNumberToRemove,1);
            localStorage.setItem("userDatas" , JSON.stringify(tx));
            location.reload()
            console.log(tx);

        });
    });
});


let hazine = [];
let daramad = [];
const amounts = tx.map((item) => {
    if (item.type == "هزینه") {
        hazine.push(item.amount);
    } else {
        daramad.push(item.amount);
    }
});


let sumOfHazine = hazine.reduce((tot , cur) => Number(tot) + Number(cur),0);
let sumOfDaramad = daramad.reduce((tot , cur) => Number(tot) + Number(cur),0);

let num1 = sumOfHazine;
let str1 = num1.toString().split('.');
if (str1[0].length >= 4) {
    str1[0] = str1[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}
if (str1[1] && str1[1].length >= 4) {
    str1[1] = str1[1].replace(/(\d{3})/g, '$1 ');
}
let sumOfHazineMain = str1.join('.');

let num2 = sumOfDaramad;
let str2 = num2.toString().split('.');
if (str2[0].length >= 4) {
    str2[0] = str2[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}
if (str2[1] && str2[1].length >= 4) {
    str2[1] = str2[1].replace(/(\d{3})/g, '$1 ');
}
let sumOfDaramadMain = str2.join('.');

userOutcome.textContent = sumOfHazineMain + " " + "تومان";
userIncome.textContent = sumOfDaramadMain + " " + "تومان";

Chart.defaults.font.family = "Vazir";
new Chart(chart, {
    type: 'line',
    data: {
      labels: ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],
      datasets: [{ 
          data: daramad,
          label: "درآمد",
          borderColor: "rgb(17, 184, 17)",
          fill: false
        }, { 
          data: hazine,
          label: "هزینه",
          borderColor: "rgb(255, 34, 34)",
          fill: false
        }
      ]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: "Vazir"
                    }
                }
            }
        }
    }
});
