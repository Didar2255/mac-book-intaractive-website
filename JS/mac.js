
// Memory price incrase
document.getElementById('8gb-btn').addEventListener('click', function () {
    const memory = document.getElementById('memory-cost');
    memory.innerText = '0';
    const fixed = document.getElementById('fixed-price');
    const fixedNumber = parseInt(fixed.innerText)
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = fixedNumber + parseInt(memory.innerText);
    const totalPurches = document.getElementById('total-purches');
    totalPurches.innerText = totalPrice.innerText;

});
document.getElementById('16gb-btn').addEventListener('click', function () {
    const memory = document.getElementById('memory-cost');
    memory.innerText = '180';
    const fixed = document.getElementById('fixed-price');
    const fixedNumber = parseInt(fixed.innerText)
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = fixedNumber + parseInt(memory.innerText);
    const totalPurches = document.getElementById('total-purches');
    totalPurches.innerText = totalPrice.innerText;

});

// storage cost incrase
document.getElementById('256bg-stor-btn').addEventListener('click', function () {
    const storage = document.getElementById('storage-cost');
    storage.innerText = '0';
    const memory = document.getElementById('memory-cost');
    const fixed = document.getElementById('fixed-price');
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = parseInt(storage.innerText) + parseInt(memory.innerText) + parseInt(fixed.innerText);
    const totalPurches = document.getElementById('total-purches');
    totalPurches.innerText = totalPrice.innerText;
});
document.getElementById('512bg-stor-btn').addEventListener('click', function () {
    const storage = document.getElementById('storage-cost');
    storage.innerText = '100';
    const memory = document.getElementById('memory-cost');
    const fixed = document.getElementById('fixed-price');
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = parseInt(storage.innerText) + parseInt(memory.innerText) + parseInt(fixed.innerText);
    const totalPurches = document.getElementById('total-purches');
    totalPurches.innerText = totalPrice.innerText;
})
document.getElementById('1tb-stor-btn').addEventListener('click', function () {
    const storage = document.getElementById('storage-cost');
    storage.innerText = '180';
    const memory = document.getElementById('memory-cost');
    const fixed = document.getElementById('fixed-price');
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = parseInt(storage.innerText) + parseInt(memory.innerText) + parseInt(fixed.innerText);
    const totalPurches = document.getElementById('total-purches');
    totalPurches.innerText = totalPrice.innerText;
})

// delivary cost 
document.getElementById('delivery-btn1').addEventListener('click', function () {
    const delivaryCost = document.getElementById('delivery-cost');
    delivaryCost.innerText = '0';
    const memory = document.getElementById('memory-cost');
    const fixed = document.getElementById('fixed-price');
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = parseInt(delivaryCost.innerText) + parseInt(memory.innerText) + parseInt(fixed.innerText);
    const totalPurches = document.getElementById('total-purches');
    totalPurches.innerText = totalPrice.innerText;
});
document.getElementById('delivery-btn2').addEventListener('click', function () {
    const delivaryCost = document.getElementById('delivery-cost');
    delivaryCost.innerText = '20';
    const memory = document.getElementById('memory-cost');
    const fixed = document.getElementById('fixed-price');
    const totalPrice = document.getElementById('total-amount');
    totalPrice.innerText = parseInt(delivaryCost.innerText) + parseInt(memory.innerText) + parseInt(fixed.innerText);
    const totalPurches = document.getElementById('total-purches');
    totalPurches.innerText = totalPrice.innerText;
})
