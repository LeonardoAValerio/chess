class Piece {
    constructor(data) {
        this.x = data.x;
        this.y = data.y;
        this.color = data.color;
    }

    move(x, y, map) {
        if(this.validate(x, y, map)) {
            this.x = x;
            this.y = y;
        }
    }
}