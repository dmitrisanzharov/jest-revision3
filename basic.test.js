const functions = require('./basic.js');

const {add, arr} = functions; 

test('test to see if the imported function is successful', () => {
    expect(functions).toBeDefined();
});

test('sum', ()=> {
    expect(add(2,4)).toEqual(6);
    expect(add(1,4)).toEqual(5);
});

test('arr', ()=> {
    expect(arr).toContain('mary')
});

test('arr', ()=> {
    const l1 = 800;
    const l2 = 700;
    let str = 'apple';
 
    expect(l1+l2).toBeLessThanOrEqual(1600);
    expect(typeof str).toEqual('string');
});
