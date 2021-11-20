//TOGGLE MONTHLY/YEARLY BILLING

let toggle = document.querySelector('.main__billing-toggle');

toggle.addEventListener('click',toggleAnimate);

function toggleAnimate() {

    let toggleCircle = document.querySelector('.main__billing-toggle-circle');
    let monthlyBilling = document.querySelector('.billing-monthly');
    let monthlyAccent = document.querySelector('.billing-monthly-accent');
    let yearlyBilling = document.querySelector('.billing-yearly');
    let yearlyAccent = document.querySelector('.billing-yearly-accent');

    if (toggleCircle.classList.contains('toggle-yearly')){
        toggleCircle.classList.remove('toggle-yearly');
        monthlyBilling.classList.add('billing-monthly-accent');
        yearlyBilling.classList.remove('billing-yearly-accent');
    }
    else {
    toggleCircle.classList.add('toggle-yearly');
    monthlyBilling.classList.remove('billing-monthly-accent');
    yearlyBilling.classList.add('billing-yearly-accent');
    }
}
