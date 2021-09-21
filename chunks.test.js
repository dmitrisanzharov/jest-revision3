const chunkyArray = require('./chunky');

test('test to see if the imported function is successful', () => {
    expect(chunkyArray([1,2,3])).toBeDefined();
});

test('chunkyArray', ()=> {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    expect(chunkyArray(numbers, len)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]); 
}); 