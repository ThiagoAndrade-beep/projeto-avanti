document.querySelectorAll('.carrossel-container').forEach(container => {
    const carrossel = container.querySelector('.carrossel');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const cards = container.querySelectorAll('.card-lancamento');
    const radioBtns = container.querySelectorAll('.radio-btn');

    const cardsPorVez = 1;
    const totalCards = cards.length;
    let posicaoAtual = 0;

    function atualizarCarrossel() {
        const larguraCard = carrossel.offsetWidth / cardsPorVez;
        const deslocamento = -posicaoAtual * larguraCard;
        carrossel.style.transform = `translateX(${deslocamento}px)`;

        prevBtn.disabled = posicaoAtual === 0;
        nextBtn.disabled = posicaoAtual >= Math.ceil(totalCards / cardsPorVez) - 1;

        atualizarDots();
    }

    function atualizarDots() {
        radioBtns.forEach((btn, i) => {
            btn.classList.toggle('active', i === posicaoAtual);
        });
    }

    nextBtn.addEventListener('click', () => {
        if (posicaoAtual < Math.ceil(totalCards / cardsPorVez) - 1) {
            posicaoAtual++;
            atualizarCarrossel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (posicaoAtual > 0) {
            posicaoAtual--;
            atualizarCarrossel();
        }
    });

    radioBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            posicaoAtual = index;
            atualizarCarrossel();
        });
    });
    
    atualizarCarrossel();
    window.addEventListener('resize', atualizarCarrossel);
});
