const Diem = require('./Diem.js');

test('test 1', () => {
    const d1=new Diem(0,0);
    const d2=new Diem(5,0);
    expect(d1.distance(d2)).toBe(5);
});

test('test 2', () => {
    const d1=new Diem(0.00001,0.00001);
    const d2=new Diem(5.00001,0.00001);
    expect(d1.distance(d2)).toBe(5);
});

test('test 3', () => {
    const d1=new Diem(0,0);
    const d2=new Diem(0,0);
    expect(d1.distance(d2)).toBe(0);
});

test('test 4', () => {
    const d1=new Diem(0.00001,0.00001);
    const d2=new Diem(0.00001,0.00001);
    expect(d1.distance(d2)).toBe(0);
});

test('test 5', () => {
    const d1=new Diem(1.5,2.598076211);
    const d2=new Diem(0,0);
    expect(d1.distance(d2)).toBe(2.9999999996940194);
});

test('test 6', () => {
    const d1=new Diem(1.6,2.698076211);
    const d2=new Diem(0.1,0.1);
    expect(d1.distance(d2)).toBe(2.9999999996940194);
});

test('test 7', () => {
    const d1=new Diem(1);
    const d2=new Diem('sdfsdf');
    expect(d1.distance(d2)).toBe(NaN);
});

test('test 8', () => {
    const d1=new Diem();
    const d2=new Diem();
    expect(d1.distance(d2)).toBe(NaN);
});