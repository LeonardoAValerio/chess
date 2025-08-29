function createMap() {
    const x = 8;
    const y = 8;
    
    const map = Array(x).fill(Array(y))
    const pawnsPositions = Pawn.initPositions();

    pawnsPositions.forEach((position) => {
        map[position.x][position.y] = new Pawn({
            x: position.x,
            y: position.y,
            color: position.color,
        })
    });
    // Fillar o mapa com cada classe de peça

    return map;
}


console.log(createMap())