
// MemoryPriceIncrease Function
function memoryPriceIncrease(initialPrice) {
    const memory = document.getElementById('memory-cost');
    memory.innerText = initialPrice;
    const storage = document.getElementById('storage-cost')
    const fixed = document.getElementById('fixed-price');
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = parseInt(fixed.innerText) + parseInt(memory.innerText) + parseInt(storage.innerText);
    const totalPurches = document.getElementById('total-purches');
    totalPurches.innerText = totalPrice.innerText;
};

document.getElementById('8gb-btn').addEventListener('click', function () {
    memoryPriceIncrease(0);
});
document.getElementById('16gb-btn').addEventListener('click', function () {
    memoryPriceIncrease(180);
});
// storagePriceIncrease function
function storagePriceIncrease(initialPrice) {
    const storage = document.getElementById('storage-cost');
    storage.innerText = initialPrice;
    const memory = document.getElementById('memory-cost');
    const fixed = document.getElementById('fixed-price');
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = parseInt(storage.innerText) + parseInt(memory.innerText) + parseInt(fixed.innerText);
    const totalPurches = document.getElementById('total-purches');
    totalPurches.innerText = totalPrice.innerText;
}
document.getElementById('256bg-stor-btn').addEventListener('click', function () {
    storagePriceIncrease(0)
});
document.getElementById('512bg-stor-btn').addEventListener('click', function () {
    storagePriceIncrease(100)
})
document.getElementById('1tb-stor-btn').addEventListener('click', function () {
    storagePriceIncrease(180)
})

// DeliveryCost Function
function deliveryPriceIncrease(initialPrice) {
    const delivaryCost = document.getElementById('delivery-cost');
    delivaryCost.innerText = initialPrice;
    const memory = document.getElementById('memory-cost');
    const storage = document.getElementById('storage-cost')
    const fixed = document.getElementById('fixed-price');
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = parseInt(delivaryCost.innerText) + parseInt(memory.innerText) + parseInt(storage.innerText) + parseInt(fixed.innerText);
    const totalPurches = document.getElementById('total-purches');
    totalPurches.innerText = totalPrice.innerText;
}
document.getElementById('delivery-btn1').addEventListener('click', function () {
    deliveryPriceIncrease(0);
});
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
        const offerAmount = (totalPriceAmount / 100) * 20;
        document.getElementById('total-purches').innerText = totalPriceAmount - offerAmount;
    }

})