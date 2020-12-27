function soSanhBang(a, b) {
    let diff = Math.abs(a - b);
    return (diff <= 0.00000001);
}

module.exports = soSanhBang;