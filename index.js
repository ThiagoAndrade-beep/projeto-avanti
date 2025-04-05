let index = 0;

function mudarSlide(direcao) {
    const slides = document.querySelector(".slides");
    const slideElements = document.querySelectorAll(".card-lancamento");
    const totalSlides = slideElements.length;

    // Atualizar o índice de acordo com a direção
    index += direcao;

    // Garantir que o índice esteja dentro dos limites
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    // Movendo os slides horizontalmente
    slides.style.transform = `translateX(${-index * 100}%)`;
}

// Mostrar os primeiros 3 cards ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card-lancamento");
    const totalSlides = cards.length;

    // Deixe os primeiros 5 visíveis e o restante oculto
    cards.forEach((card, i) => {
        if (i < 5) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    // Exibir o primeiro conjunto de 3 cards
    slides.style.transform = "translateX(0%)";
});


const slides = document.querySelectorAll('.slide');
const radioBtns = document.querySelectorAll('.radio-btn');

// Função para mudar de slide
function goToSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    radioBtns.forEach(btn => btn.classList.remove('active'));
    
    slides[n].classList.add('active');
    radioBtns[n].classList.add('active')
}





