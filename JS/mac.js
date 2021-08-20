function


// Memory price incrase
document.getElementById('8gb-btn').addEventListener('click', function () {
    const memory = document.getElementById('memory-cost');
    memory.innerText = '0';
});
document.getElementById('16gb-btn').addEventListener('click', function () {
    const memory = document.getElementById('memory-cost');
    memory.innerText = '180';
});

// storage cost incrase
document.getElementById('256bg-stor-btn').addEventListener('click', function () {
    const storage = document.getElementById('storage-cost');
    storage.innerText = '0';
});
document.getElementById('512bg-stor-btn').addEventListener('click', function () {
    const storage = document.getElementById('storage-cost');
    storage.innerText = '100';
})
document.getElementById('1tb-stor-btn').addEventListener('click', function () {
    const storage = document.getElementById('storage-cost');
    storage.innerText = '180';
})

// delivary cost 
document.getElementById('delivery-btn1').addEventListener('click', function () {
    const delivaryCost = document.getElementById('delivery-cost');
    delivaryCost.innerText = '0';
});
document.getElementById('delivery-btn2').addEventListener('click', function () {
    const delivaryCost = document.getElementById('delivery-cost');
    delivaryCost.innerText = '20';
})
