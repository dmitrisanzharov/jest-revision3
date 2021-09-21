const fetchData = require('./fetchedData');

test('test to see if the imported function is successful', () => {
    expect(fetchData()).toBeDefined();
});

test('fetchData', async ()=> {
    expect.assertions(1);  
    let data = await fetchData();      
    expect(data.username).toEqual('Bret')
});