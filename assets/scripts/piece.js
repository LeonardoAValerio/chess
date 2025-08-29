class Piece {
    constructor(data) {
        this.x = data.x;
        this.y = data.y;
        this.img = data.img;
    }

    move(x, y) {
        if(this.validate()) {
            this.x = x;
            this.y = y;
        }
    }
}

class Pawn extends Piece {
    constructor() {

    }

    showPossiblesMoves(map) {
        return [
            { x: 0, y: 1}
        ]
    }
}

