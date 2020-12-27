class Diem {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance(p) {
        const dx = this.x - p.x;
        const dy = this.y - p.y;

        return Math.hypot(dx, dy);
    }
}

module.exports = Diem;