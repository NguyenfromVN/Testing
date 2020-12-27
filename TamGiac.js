const Diem = require('./Diem.js');
const soSanhBang = require('./helpers.js');

// private helper
function phanLoaiTamGiac(danhSachDiem) {
    const diem1 = danhSachDiem[0];
    const diem2 = danhSachDiem[1];
    const diem3 = danhSachDiem[2];
    const a = diem1.distance(diem2);
    const b = diem2.distance(diem3);
    const c = diem3.distance(diem1);

    if (!(a + b > c && a + c > b && b + c > a)) {
        return 'khong la tam giac';
    }
    if (soSanhBang(a, b) && soSanhBang(b, c)) {
        return 'deu';
    }
    if (soSanhBang(a, b) || soSanhBang(a, c) || soSanhBang(b, c)) {
        if (soSanhBang(a * a + b * b, c * c) || soSanhBang(a * a + c * c, b * b) || soSanhBang(b * b + c * c, a * a)) {
            return 'vuong can';
        } else {
            return 'can';
        }
    }
    if (soSanhBang(a * a + b * b, c * c) || soSanhBang(a * a + c * c, b * b) || soSanhBang(b * b + c * c, a * a)) {
        return 'vuong';
    }
    return 'thuong';
}

class TamGiac {
    constructor(danhSachDiem) {
        this.diem = [];
        this.diem.push(danhSachDiem[0]);
        this.diem.push(danhSachDiem[1]);
        this.diem.push(danhSachDiem[2]);

        // phân loại tam giác
        this.loai = phanLoaiTamGiac(danhSachDiem);

        // tính chu vi
        const diem1 = danhSachDiem[0];
        const diem2 = danhSachDiem[1];
        const diem3 = danhSachDiem[2];
        const a = diem1.distance(diem2);
        const b = diem2.distance(diem3);
        const c = diem3.distance(diem1);
        this.chuVi=a+b+c;
    }
}

module.exports = TamGiac;