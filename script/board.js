class MemoryBoard {
    constructor() {
        this.cards = [
            'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'ca', 'cj', 'cq', 'ck',
            'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'da', 'dj', 'dq', 'dk',
            'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'ha', 'hj', 'hq', 'hk',
            's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sa', 'sj', 'sq', 'sk'
        ];

        this.board = [];
    }


    generateCards() {
        this.board = [];
        while (this.board.length < 12) {
            let randomIndex = Math.floor(Math.random() * this.cards.length);  // cria em modo random 12 cartas ( das 52 do barallho ) para o jogo 
            let card = this.cards[randomIndex];


            if (this.board.indexOf(card) > -1) {    //  serve para so termos duas cartas em vez de 4 
                continue;
            }

            this.board.push(card);
            this.board.push(card);
        }
        this.shuffle();
    }

    shuffle() {
        for (let i = this.board.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.board[i], this.board[j]] = [this.board[j], this.board[i]];
        }
    }


}