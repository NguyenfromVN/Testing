const Diem = require('./Diem.js');
const TamGiac = require('./TamGiac.js');
const soSanhBang = require('./helpers.js');

// test phân loại

test('test 1', () => {
  const tg=new TamGiac([new Diem(0,0), new Diem(1,0), new Diem(2,0)]);
  expect(tg.loai).toBe('khong la tam giac');
});

test('test 2', () => {
  const tg=new TamGiac([new Diem(0.00001,0.00001),new Diem(1.00001,0.00001),new Diem(2.00001,0.00001)]);
  expect(tg.loai).toBe('khong la tam giac');
});

test('test 3', () => {
  const tg=new TamGiac([new Diem(0.11111,0.11111),new Diem(0.11111,0.11111),new Diem(2.11111,0.11111)]);
  expect(tg.loai).toBe('khong la tam giac');
});

test('test 4', () => {
  const tg=new TamGiac([new Diem(0,0),new Diem(3,0),new Diem(1.5,2.598076211)]);
  expect(tg.loai).toBe('deu');
});

test('test 5', () => {
  const tg=new TamGiac([new Diem(0.1,0.1),new Diem(3.1,0.1),new Diem(1.6,2.698076211)]);
  expect(tg.loai).toBe('deu');
});

test('test 6', () => {
  const tg=new TamGiac([new Diem(0,0),new Diem(3,0),new Diem(1.5,3)]);
  expect(tg.loai).toBe('can');
});

test('test 7', () => {
  const tg=new TamGiac([new Diem(0.1,0.1),new Diem(3.1,0.1),new Diem(1.6,1.698076211)]);
  expect(tg.loai).toBe('can');
});

test('test 8', () => {
  const tg=new TamGiac([new Diem(0,0),new Diem(3,0),new Diem(0,5)]);
  expect(tg.loai).toBe('vuong');
});

test('test 9', () => {
  const tg=new TamGiac([new Diem(0.11111,0.11111),new Diem(3.11111,0.11111),new Diem(0.11111,5.11111)]);
  expect(tg.loai).toBe('vuong');
});

test('test 10', () => {
  const tg=new TamGiac([new Diem(0,2),new Diem(2,0),new Diem(4,2)]);
  expect(tg.loai).toBe('vuong can');
});

test('test 11', () => {
  const tg=new TamGiac([new Diem(0.00001,2.00001),new Diem(2.00001,0.00001),new Diem(4.00001,2.00001)]);
  expect(tg.loai).toBe('vuong can');
});

test('test 12', () => {
  const tg=new TamGiac([new Diem(0,0),new Diem(2,3),new Diem(3,3)]);
  expect(tg.loai).toBe('thuong');
});

test('test 13', () => {
  const tg=new TamGiac([new Diem(0,0.00001),new Diem(2.11111,3),new Diem(3.00001,3.11111)]);
  expect(tg.loai).toBe('thuong');
});

// test chu vi

test('test 14', () => {
  const tg=new TamGiac([new Diem(0,0),new Diem(3,0),new Diem(1.5,2.598076211)]);
  expect(soSanhBang(tg.chuVi,9)).toBe(true);
});

test('test 15', () => {
  const tg=new TamGiac([new Diem(0.1,0.1),new Diem(3.1,0.1),new Diem(1.6,2.698076211)]);
  expect(soSanhBang(tg.chuVi,9)).toBe(true);
});

test('test 16', () => {
  const tg=new TamGiac([new Diem(0,0),new Diem(3,0),new Diem(0,4)]);
  expect(soSanhBang(tg.chuVi,12)).toBe(true);
});

test('test 17', () => {
  const tg=new TamGiac([new Diem(0,0),new Diem(3,0),new Diem(0,3)]);
  expect(soSanhBang(tg.chuVi,10.24264069)).toBe(true);
});

test('test 18', () => {
  const tg=new TamGiac([new Diem(0,0),new Diem(2,3),new Diem(3,2)]);
  expect(soSanhBang(tg.chuVi,8.625316113)).toBe(true);
});

test('test 19', () => {
  const tg=new TamGiac([new Diem(0.00001,0.11111),new Diem(2.00001,3.11111),new Diem(3.00001,2.11111)]);
  expect(soSanhBang(tg.chuVi,8.625316113)).toBe(true);
});