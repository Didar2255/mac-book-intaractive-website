// MemoryPriceIncrease Function
function memoryPriceIncrease(initialPrice) {
    const memory = document.getElementById('memory-cost');
    memory.innerText = initialPrice;
    const storage = document.getElementById('storage-cost')
    const fixed = document.getElementById('fixed-price');
    const deliveryCost = document.getElementById('delivery-cost');
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = parseInt(fixed.innerText) + parseInt(memory.innerText) + parseInt(storage.innerText) + parseInt(deliveryCost.innerText);
    const totalpurchase = document.getElementById('total-purchase');
    totalpurchase.innerText = totalPrice.innerText;
};

// 8gb memory add event hendle

document.getElementById('8gb-btn').addEventListener('click', function () {
    memoryPriceIncrease(0);
});

// 16gb memory add event hendle
document.getElementById('16gb-btn').addEventListener('click', function () {
    memoryPriceIncrease(180);
});
// storagePriceIncrease function
function storagePriceIncrease(initialPrice) {
    const storage = document.getElementById('storage-cost');
    storage.innerText = initialPrice;
    const memory = document.getElementById('memory-cost');
    const fixed = document.getElementById('fixed-price');
    const delivaryCost = document.getElementById('delivery-cost')
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = parseInt(storage.innerText) + parseInt(memory.innerText) + parseInt(fixed.innerText) + parseInt(delivaryCost.innerText);
    const totalpurchase = document.getElementById('total-purchase');
    totalpurchase.innerText = totalPrice.innerText;
}
// 256 gb storage add event hendeler

document.getElementById('256bg-stor-btn').addEventListener('click', function () {
    storagePriceIncrease(0)
});
// 512 gb storage add event hendeler
document.getElementById('512bg-stor-btn').addEventListener('click', function () {
    storagePriceIncrease(100)
});
// 1tb storage add event hendeler

document.getElementById('1tb-stor-btn').addEventListener('click', function () {
    storagePriceIncrease(180)
});

// DeliveryCost use function

function deliveryPriceIncrease(initialPrice) {
    const delivaryCost = document.getElementById('delivery-cost');
    delivaryCost.innerText = initialPrice;
    const memory = document.getElementById('memory-cost');
    const storage = document.getElementById('storage-cost');
    const fixed = document.getElementById('fixed-price');
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = parseInt(delivaryCost.innerText) + parseInt(storage.innerText) + parseInt(memory.innerText) + parseInt(fixed.innerText);
    const totalpurchase = document.getElementById('total-purchase');
    totalpurchase.innerText = totalPrice.innerText;
};
// delivaryCost 0 discount
document.getElementById('delivery-btn1').addEventListener('click', function () {
    deliveryPriceIncrease(0);
});

// delivaryCost 20 discount
document.getElementById('delivery-btn2').addEventListener('click', function () {
    deliveryPriceIncrease(20);
});

// add cupon code
document.getElementById('submit-btn').addEventListener('click', function () {
    const inputField = document.getElementById('cupon-input');
    const CuponInput = inputField.value;
    inputField.value = '';
    const totalPrice = document.getElementById('total-amount');
    const totalPriceAmount = parseInt(totalPrice.innerText);
    if (CuponInput == 'stevekaku') {
        const offerAmount = (totalPriceAmount * 20) / 100;
        document.getElementById('total-purchase').innerText = totalPriceAmount - offerAmount;
    }

})