class Desk {
    constructor() {
        this.cards = [];
    }

    createDesk() {
        let values = '2,3,4,5,6,7,8,9,10,A,J,Q,K'.split(",");
        let suits = 'S,C,D,H'.split(",");
        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                let card = new Card(values[i], suits[j]);
                this.cards.push(card);
            }
        }
    }

    showAll(id) {
        let html = document.getElementById(id);
        let str = '';
        for (let i = 0; i < this.cards.length; i++) {
            str += this.cards[i].getHtml();
        }
        html.innerHTML = str;
    }

    hideAll(id) {
        let html = document.getElementById(id);
        let str = '';
        for (let i = 0; i < this.cards.length; i++) {
            str += this.cards[i].getHtmlBack();
        }
        html.innerHTML = str;
    }
}