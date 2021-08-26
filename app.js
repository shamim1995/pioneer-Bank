//login form handler
let submitBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener("click", function () {
    let loginSection = document.querySelector("#loginSection");
    loginSection.style.display = "none";
    let transition = document.querySelector("#transition");
    transition.style.display = "block"

});

//transition deposit section handler
let depositBtn = document.querySelector("#depositBtn");
depositBtn.addEventListener("click", function () {
    
    let addDepositBalance = spanWithdraw("#depositBalance");

    spanText("#depositDollar", addDepositBalance);
    spanText("#balanceDollar", addDepositBalance);
    document.querySelector("#depositBalance").value = "";

});
//withdraw section handler

let withdrawBtn = document.querySelector("#withdrawBtn");

withdrawBtn.addEventListener("click", function () {

    let addWithdrawBalance = spanWithdraw("#withdrawBalance");
    spanText("#currentWithdraw", addWithdrawBalance);
    spanText("#balanceDollar", -1 * addWithdrawBalance);
    document.querySelector("#withdrawBalance").value = "";
    
});

function spanWithdraw(id) {
    let withdraw = document.querySelector(id).value;
    addWithdrawBalance = parseFloat(withdraw);
    return addWithdrawBalance;
}



//balance section handler end
function spanText(id, addDepositBalance) {
    let balanceDollar = document.querySelector(id).innerText;
    let addBalanceDollar = parseFloat(balanceDollar);
    let totalBalanceDollar = addBalanceDollar + addDepositBalance;
    document.querySelector(id).innerText = totalBalanceDollar;
}