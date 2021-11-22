//TOGGLE MONTHLY/YEARLY BILLING

let toggle = document.querySelector('.main__billing-toggle');

toggle.addEventListener('click',toggleAnimate);

function toggleAnimate() {

    let toggleCircle = document.querySelector('.main__billing-toggle-circle');
    let monthlyBilling = document.querySelector('.billing-monthly');
    let yearlyBilling = document.querySelector('.billing-yearly');

    if (toggleCircle.classList.contains('toggle-yearly')){
        toggleCircle.classList.remove('toggle-yearly');
        toggleCircle.classList.add('toggle-monthly');
        monthlyBilling.classList.add('billing-monthly-accent');
        yearlyBilling.classList.remove('billing-yearly-accent');
    }
    else {
    toggleCircle.classList.add('toggle-yearly');
    toggleCircle.classList.remove('toggle-monthly');
    monthlyBilling.classList.remove('billing-monthly-accent');
    yearlyBilling.classList.add('billing-yearly-accent');
    }
}

//YEARLY PRICING CALCULATION

function calculateYearlyPrice(x) {
    let discountedPriceMutliplier = (1 - 0.25);
    let yearlyPrice = parseInt(x) * discountedPriceMutliplier;
    let pricingUi = document.querySelector('.main__pricing-number');

    pricingUi.innerText = '$' + yearlyPrice + '.00';
}

//JQUERY SLIDER

$( function() {
    $( ".main__slider" ).slider({
      value:0,
      min: 0,
      max: 100,
      step: 25,
      slide: function( event, ui ) {

        let selected= ui.value;
        let pageviewsUi = document.querySelector('.main__pageviews-number');
        let pricingUi = document.querySelector('.main__pricing-number');
        let toggleCircle = document.querySelector('.main__billing-toggle-circle');
        let sliderWidthDynamic = document.querySelector('.main__slider-current');

        let pageviewsSlider = {
            0 : '10K',
            25 : '50K',
            50 : '100K',
            75 : '500k',
            100 : '1M'
        }
        let pricingSlider = {
            0 : 8,
            25 : 12,
            50 : 16,
            75 : 24,
            100 : 36
        }
        let sliderWidth = {
            0 : 0,
            25 : 25,
            50 : 50,
            75 : 75,
            100 : 100 
        }

        pageviewsUi.innerText = pageviewsSlider[selected];
        sliderWidthDynamic.style.width = sliderWidth[selected] + '%';
        
        if (toggleCircle.classList.contains('toggle-monthly')) {
            pricingUi.innerText = '$' + pricingSlider[selected] + '.00';
        }
        else {
            calculateYearlyPrice(pricingSlider[selected]);
        }
      } 
    });
  } );

//PRICE CORRECTION ON TOGGLE

toggle.addEventListener('click',priceCorrection);

function priceCorrection() {
    let pageviewsUi = document.querySelector('.main__pageviews-number').innerText;
    let pricingUi = document.querySelector('.main__pricing-number');
    let toggleCircle = document.querySelector('.main__billing-toggle-circle');

    let pricingMatrix = {
        '10K' : 8,
        '50K' : 12,
        '100K' : 16,
        '500K' : 24,
        '1M' : 36
    }

    if (toggleCircle.classList.contains('toggle-yearly')) {
        calculateYearlyPrice(pricingMatrix[pageviewsUi]);
    }
    else {
        pricingUi.innerText = '$' + pricingMatrix[pageviewsUi] + '.00';
    }
}
