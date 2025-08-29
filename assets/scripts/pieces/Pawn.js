
class Pawn extends Piece {
    constructor(data) {
        super(data)
    }

    validate(x, y, map) {
        if(map[x][y].piece) {
            return false
        }
        return true;
    }

    showPossiblesMoves(map) {
        return [
            { x: 0, y: 1}
        ]
    }

    static initPositions() {
        return [
            { y: 1, x: 0, color: "white" },
            { y: 1, x: 1, color: "white" },
            { y: 1, x: 2, color: "white" },
            { y: 1, x: 3, color: "white" },
            { y: 1, x: 4, color: "white" },
            { y: 1, x: 5, color: "white" },
            { y: 1, x: 6, color: "white" },
            { y: 1, x: 7, color: "white" },
            { y: 6, x: 0, color: "black" },
            { y: 6, x: 1, color: "black" },
            { y: 6, x: 2, color: "black" },
            { y: 6, x: 3, color: "black" },
            { y: 6, x: 4, color: "black" },
            { y: 6, x: 5, color: "black" },
            { y: 6, x: 6, color: "black" },
            { y: 6, x: 7, color: "black" }
        ]
    }
}

