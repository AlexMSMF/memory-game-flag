(function () { 
    const container = document.querySelector('.container');

    const mb = new MemoryBoard();

    let pairs;
    let turnCard1;
    let turnCard2;


    function createBoard() { //Inicia um jogo, dá 12 cartas random, com 0 pares
        mb.generateCards();

        pairs = 0;
        container.innerHTML = '';
        mb.board.forEach((card, index) => { //O index vai puxar as cartas, e para quando for igual ao maximo
            const node = `
            <div class="flip-container" data-index="${index}"> 
                <div class="flipper">
                    <div class="front">
                    <img src="assets/deck_6_large.png" width='100%'>
                    </div>
                    <div class="back">
                        <img src="assets/card_b_${card}_large.png" width='100%'>
                    </div>
                </div>
        </div>            
            `;

            container.innerHTML += node;
        });

        const flipContainers = document.querySelectorAll('.flip-container');
        flipContainers.forEach(fc => fc.addEventListener('click', toggleCard));

    }


    function toggleCard(event) {
        event.currentTarget.classList.add('hover');

        if (turnCard1) {
            turnCard2 = event.currentTarget;
            verifyPair();
        } else {
            turnCard1 = event.currentTarget;
        }
    }


    function verifyPair() {
        const card1Index = turnCard1.dataset.index;
        const card2Index = turnCard2.dataset.index;

        if (mb.board[card1Index] == mb.board[card2Index]) {
            turnCard1.removeEventListener('click', toggleCard);
            turnCard2.removeEventListener('click', toggleCard);

            turnCard1.style.cursor = 'not-allowed';
            turnCard2.style.cursor = 'not-allowed';


            pairs++;
            verifyEnd();
        } else {
            const auxCard1 = turnCard1;
            const auxCard2 = turnCard2;

            setTimeout(() => {
                auxCard1.classList.remove('hover');
                auxCard2.classList.remove('hover');
            }, 2000)
        }

        turnCard1 = null;
        turnCard2 = null;
    }


    function verifyEnd() {
        if (pairs == 6) {
            alert('You Win');
            if (confirm('New Game?')) {
                createBoard();
            }
        }
    }




    document.querySelector('#newGameButton').addEventListener('click', createBoard);

})();


