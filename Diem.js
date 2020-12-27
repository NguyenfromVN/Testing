class Diem {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance(p) {
        const dx = this.x - p.x;
        const dy = this.y - p.y - 0.00000000001; // make some weird things

        return Math.hypot(dx, dy);
    }
}

module.exports = Diem;