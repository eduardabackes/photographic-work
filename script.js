// Função para carregar as imagens do arquivo JSON
function loadImages() {
    fetch('./json/images.json')
        .then(response => response.json())
        .then(data => {
            const carouselContainer = document.getElementById('imageCarousel');
            let html = '';

            // Iterar sobre as imagens no JSON e gerar o HTML
            data.images.forEach(image => {
                html += `
                    <div class="carousel-slide">
                        <img src="${image.src}" alt="${image.alt}" class="carousel-image">
                        <p>${image.caption}</p>
                    </div>
                `;
            });

            // Inserir as imagens no carrossel
            carouselContainer.innerHTML = html;

            // Inicializar o carrossel
            startCarousel();
        })
        .catch(error => console.error('Error loading images:', error));
}

// Função para controlar o carrossel
let currentSlide = 0;

function startCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Mostrar a imagem atual
    function showSlide() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? 'block' : 'none';
        });
    }

    // Função para ir para a próxima imagem
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide();
    }

    // Função para ir para a imagem anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide();
    }

    // Configura os botões de navegação
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Mostrar a primeira imagem
    showSlide();

    // Definir o intervalo de troca automática das imagens (3 segundos)
    setInterval(nextSlide, 3000);
}

// Carregar as imagens ao carregar a página
document.addEventListener('DOMContentLoaded', loadImages);