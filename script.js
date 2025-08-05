const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');

    })
}
if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');

    })

}

/*const carouselList = document.getElementById('carousel-list');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
const totalSlides = document.querySelectorAll('#carousel-list .img-item').length;
let currentSlide = 0;

function updateCarousel() {
  carouselList.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}); */


/*sidebar*/

const sideBarNavigationEl = document.getElementById('sidebar-container-navigation-id');
const sideBarOpenNavigationEl = document.getElementById('open-nav-sidebar');
const sideBarCloseNavigationEl = document.getElementById('sidebar-navigation-close')

sideBarOpenNavigationEl.addEventListener('click', () => {
  sideBarNavigationEl.classList.toggle("slidebar-show");
});
 /***************X-button**************/
    sideBarCloseNavigationEl.addEventListener('click', () => {
      sideBarNavigationEl.classList.toggle("slidebar-show");      
    });  
        

/*exchange rate*/

        const rates = {
            USD: 1,
            UGX: 3600,   
            EUR: 0.92 
        };

        // Seller price conversion
        const priceInput = document.getElementById('ad-price');
        const currencySelect = document.getElementById('ad-currency');
        const convertedPrice = document.getElementById('convertedPrice');

        function updateConvertedPrice() {
            const price = parseFloat(priceInput.value) || 0;
            const currency = currencySelect.value;
            if (currency === 'USD') {
                convertedPrice.textContent = '';
                return;
            }
            // Convert to USD
            const usdPrice = currency === 'UGX'
                ? price / rates.ETB
                : price / rates.EUR;
            convertedPrice.textContent = `≈ $${usdPrice.toFixed(2)} USD`;
        }

        priceInput.addEventListener('input', updateConvertedPrice);
        currencySelect.addEventListener('change', updateConvertedPrice);

        // Buyer currency conversion (for preview/demo)
        const buyerCurrencySelect = document.getElementById('buyer-currency');
        const buyerConvertedPrice = document.getElementById('buyerConvertedPrice');

        function updateBuyerConvertedPrice() {
            const price = parseFloat(priceInput.value) || 0;
            const sellerCurrency = currencySelect.value;
            const buyerCurrency = buyerCurrencySelect.value;
            if (!price) {
                buyerConvertedPrice.textContent = '';
                return;
            }
            // Convert seller price to USD first
            let usdPrice = price;
            if (sellerCurrency === 'UGX') usdPrice = price / rates.UGX;
            else if (sellerCurrency === 'EUR') usdPrice = price / rates.EUR;
            // Convert USD to buyer currency
            let buyerPrice = usdPrice;
            if (buyerCurrency === 'UGX') buyerPrice = usdPrice * rates.UGX;
            else if (buyerCurrency === 'EUR') buyerPrice = usdPrice * rates.EUR;
            buyerConvertedPrice.textContent = `≈ ${buyerCurrency === 'USD' ? '$' : buyerCurrency === 'UGX' ? 'UGX ' : '€'}${buyerPrice.toFixed(2)} ${buyerCurrency}`;
        }

        priceInput.addEventListener('input', updateBuyerConvertedPrice);
        currencySelect.addEventListener('change', updateBuyerConvertedPrice);
        buyerCurrencySelect.addEventListener('change', updateBuyerConvertedPrice);

        // Initialize on page load
        updateConvertedPrice();
        updateBuyerConvertedPrice();

       