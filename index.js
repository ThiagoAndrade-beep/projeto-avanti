document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const cards = document.querySelectorAll('.carrossel .card-lancamento');
    const radioBtns = document.querySelectorAll('.radio-btn');

    const totalCards = cards.length;
    const cardsPorVez = 1;
    let posicaoAtual = 0;

    function atualizarCarrossel() {
        const larguraCard = carrossel.offsetWidth / cardsPorVez;
        const deslocamento = -posicaoAtual * larguraCard * cardsPorVez;
        carrossel.style.transform = `translateX(${deslocamento}px)`;

        prevBtn.disabled = posicaoAtual === 0;
        nextBtn.disabled = posicaoAtual >= Math.ceil(totalCards / cardsPorVez) - 1;

        atualizarDots(posicaoAtual);
    }

    function atualizarDots(index) {
        radioBtns.forEach(btn => btn.classList.remove('active'));
        if (radioBtns[index]) {
            radioBtns[index].classList.add('active');
        }
    }

    nextBtn.addEventListener('click', function() {
        if (posicaoAtual < Math.ceil(totalCards / cardsPorVez) - 1) {
            posicaoAtual++;
            atualizarCarrossel();
        }
    });

    prevBtn.addEventListener('click', function() {
        if (posicaoAtual > 0) {
            posicaoAtual--;
            atualizarCarrossel();
        }
    });

    radioBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            posicaoAtual = index;
            atualizarCarrossel();
        });
    });

    atualizarCarrossel();
    window.addEventListener('resize', atualizarCarrossel);
});
