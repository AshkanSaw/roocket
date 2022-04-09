submitButton.addEventListener("click" , () => {


    // checking Inputs values

    // cheking first input > moneyInout Or moneyOutput
    if (moneyInput.checked || moneyOutput.checked) {

        //checking user select all option or just one option
        if (moneyInput.checked == true && moneyOutput.checked == true) {

            //user select all options
            console.log("Please Select Just One Option");

        } else {
            
            //user selected one option
            console.log("Done! You Select Money Input Or Output");

            if (moneyInput.checked) {

                //user selecet moneyInput
                console.log("You Selected MoneyInput");
                // moneyTypeTextDisplay = "هزینه";


            } else if (moneyOutput.checked) {

                //user selected moneyOutput
                console.log("You Selected MoneyOutput");
                // moneyTypeTextDisplay = "درآمد";

            }

            //checking next input > Money count input
            if (moneyEntered.value != "") {
                
                //checking moneyInout Deeply
                if (moneyEntered.value >= 1) {

                    //user enter the money input deeply correct
                    console.log("Done! You Entered Money Count");

                    // moneyCountTextDisplay = moneyEntered.value;



                        //checking next input > date input > year
                        if (dateInput__yeaer.value != "") {

                            //checking user enter year value corecctly
                            if (dateInput__yeaer.value.length == 4) {

                                //checking year valiue deeply
                                if (dateInput__yeaer.value >= 1399 && dateInput__yeaer.value <= 1402) {

                                    //user enter the year value correctly
                                    console.log("Done! You Entered Count For Year input Correctly");

                                    // dateTextDisplay[0] = dateInput__yeaer.value;

                                    //checking next input > date input > month
                                    if (dateInput__month.value != "") {

                                        //checking user enter the month value
                                        if (dateInput__month.value.length <= 2) {

                                            //checking month value count deeply
                                            if (dateInput__month.value <= 12 && dateInput__month.value >= 1) {

                                                //user enter the month value deeply correct
                                                console.log("Done! You Enter The Month Value Correctly");

                                                // dateTextDisplay[1] = dateInput__month.value;

                                                //checking next input > date input > day
                                                if (dateInput__day.value != "") {

                                                    //checking month value deeply
                                                    if (dateInput__day.value >= 1 && dateInput__day.value <= 31) {

                                                        //user enter the month valu correctly
                                                        console.log("Done! You Entered Count For Day Input");

                                                        // dateTextDisplay[2] = dateInput__day.value;

                                                        // let dateTextDisplayDay = JSON.parse(localStorage.getItem("datas")).day[0];
                                                        // let dateTextDisplayMonth = JSON.parse(localStorage.getItem("datas")).month[0];
                                                        // let dateTextDisplayYear = JSON.parse(localStorage.getItem("datas")).year[0];
                                                        
                                                        // dateTextDisplayOrdered = `${dateTextDisplayYear}/${dateTextDisplayMonth}/${dateTextDisplayDay}`;


                                                        //checking next input > info input 
                                                        if (infoInput.value != "") {

                                                            //user entered the value for info inout
                                                            console.log("Done! You Entered Value For Info");
                                                            console.log("Finished!");


                                                            


                                                            infoInput.value = "";
                                                            dateInput__day.value = "";
                                                            dateInput__month.value = "";
                                                            dateInput__yeaer.value = "";
                                                            moneyEntered.value = "";
                                                            
                                                            if (moneyInput.checked) {
                                                                moneyInput.checked = false;
                                                            } else if (moneyOutput.checked) {
                                                                moneyOutput.checked = false
                                                            }


                                                            // moneyTypeTextDisplay = JSON.parse(localStorage.getItem("datas")).type[0];
                                                            // moneyCountTextDisplay = JSON.parse(localStorage.getItem("datas")).amount[0];
                                                            

                                                            tableRowGenerator(moneyCountTextDisplay , dateTextDisplayOrdered , moneyTypeTextDisplay);

                                                            const tableShowButton = document.querySelector(".table-show-btn");
                                                            const tableRemoveButton = document.querySelector(".table-remove-btn");

                                                            tableShowButton.addEventListener("click" , () => {

                                                                mainModal.classList.remove("modal-hide");
                                                                mainModal.classList.add("modal-show");
                                                            
                                                                modalBg.classList.remove("modal-hide");
                                                                modalBg.classList.add("modal-show");
                                                            
                                                                showModal.classList.remove("modal-hide");
                                                                showModal.classList.add("modal-show");

                                                                const modalInnerText = document.createElement("p");
                                                                let localStorageInfo = JSON.parse(localStorage.getItem("info"));
                                                                modalInnerText.textContent = localStorageInfo;
                                                                modalInnerTextParent.appendChild(modalInnerText);

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

                                                            tableRemoveButton.addEventListener("click" , () => {

                                                                
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

                                                                    tableRemoveButton.parentElement.parentElement.remove();
                                                                    tableRowNumberDisplay--;

                                                                });


                                                                
                                                            });

                                                        } else {

                                                            //user dose not enter value for info input
                                                            console.log("Please Write Somthing For Info");

                                                        }

                                                    } else {

                                                        //user dose not enter the day valu deeply correct
                                                        console.log("Please Enter The Day Valu About 1 to 31");
                                                    }

                                                } else {

                                                    //user dose not enter day value
                                                    console.log("Please Enter The Day Count");
                                                }

                                            } else {

                                                //user dose not enter the month value deeply correct
                                                console.log("Please enter The Month Value About 1 to 12");
                                            }

                                        } else {

                                            //user dose not enter the month value correctly
                                            console.log("Please enter The Month Correcly");

                                        }


                                    } else {

                                        //user dose not enter month value
                                        console.log("Please Enter The Month Count");

                                    }

                                } else {

                                    //user dose not enter the year cvalue deeply correct
                                    console.log("Please Enter The Year Value About 1399 to 1402");
                                }


                            } else {

                                //user dose not enter the year value correctly
                                console.log("Please enter The Year Correcly EX: 1400");

                            }


                        } else {

                            //user dose not enter year value
                            console.log("Please enter The year count");
                        }

                } else {

                    //user dose not enter the money value correctly
                    console.log("Please Enter The Money Count Correctly");
                }

            } else {

                //user dose not enter ther number for Money count
                console.log("Error! Please Enter Money");

            }
        }
    } else {
        console.log("Error! Please Select Money Input Oe Money OutPut");
    }
});

inputDiv.addEventListener("click" , () => {

    //checking MoneyOutput input checked or not
    if (moneyOutput.checked) {
        
        //user selected MoneyOutput 
        console.log("You Selected MoneyOutput So You Cant Select MoneyInput");

    } else {

        //user selected Moneyinput
        inputDiv.style.border = "1px solid rgb(20, 170, 20)";
        inputDiv.style.boxShadow = "0px 0px 5px rgba(20, 170, 20, .5)";

        moneyOutput.disabled = !this.checked;
    }

});

outputDiv.addEventListener("click" , () => {

        //checking MoneyInput input checked or not
    if (moneyInput.checked) {
        
        //user selected MoneyInput 
        console.log("You Selected MoneyInput So You Cant Select MoneyOutput");

    } else {

        //user selected Moneyinput
        outputDiv.style.border = "1px solid rgb(20, 170, 20)";
        outputDiv.style.boxShadow = "0px 0px 5px rgba(20, 170, 20, .5)";

        moneyInput.disabled = !this.checked;
    }
});


/*
// //need to fix //ERROR!
moneyCountInput.addEventListener("click" , () => {

    const moneyCountInputTomanDisplayParent = document.querySelector(".money-count-display");
    const moneyCountInputTomanDisplay = document.createElement("span");
    moneyCountInputTomanDisplayParent.appendChild(moneyCountInputTomanDisplay);


    moneyCountInput.addEventListener("keydown" , (e) => {

        moneyCountInputTomanDisplay.textContent = moneyCountInput.value;

        // moneyCountInputTomanDisplay.textContent = "معادل" + " " + moneyCountInput.value + " " + "هزار تومان";

    });
});
*/

