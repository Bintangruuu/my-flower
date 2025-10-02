const flowerContainer = document.getElementById('flower-container');

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * window.innerWidth + 'px';
    flower.style.top = Math.random() * window.innerHeight + 'px';
    flowerContainer.appendChild(flower);
}

// Buat beberapa bunga saat halaman dimuat
for (let i = 0; i < 10; i++) {
    createFlower();
}
