const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

// Atualiza o slider para mostrar o slide atual
function updateSlider() {
    // Move o container para o slide ativo
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza os indicadores
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Navegação para o próximo slide
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Vai para o primeiro slide depois do último
    updateSlider();
});

// Navegação para o slide anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Vai para o último slide se estiver no primeiro
    updateSlider();
});

// Clique nos pontos de navegação
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index; // Define o slide atual para o índice clicado
        updateSlider();
    });
});

// Inicializa o slider na posição correta
updateSlider();

function updateSlider() {
    // Move o container para o slide ativo
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza os indicadores
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // As setas sempre estarão visíveis, não são ocultadas
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
}
