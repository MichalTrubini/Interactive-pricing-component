//TOGGLE MONTHLY/YEARLY BILLING

let toggle = document.querySelector('.main__billing-toggle');

toggle.addEventListener('click',toggleAnimate);

function toggleAnimate() {

    let toggleCircle = document.querySelector('.main__billing-toggle-circle');
    let monthlyBilling = document.querySelector('.billing-monthly');
    let yearlyBilling = document.querySelector('.billing-yearly');

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

        let pageviewsSlider = {
            0 : '10K',
            25 : '50K',
            50 : '100K',
            75 : '500k',
            100 : '1M'
        }
        let pricingSlider = {
            0 : '8',
            25 : '12',
            50 : '16',
            75 : '24',
            100 : '36'
        }

        pageviewsUi.innerText = pageviewsSlider[selected];
        
        if (toggleCircle.classList.contains('toggle-monthly')) {
            pricingUi.innerText = '$' + pricingSlider[selected] + '.00';
        }
      } 
    });
/*     $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) ); */
  } );