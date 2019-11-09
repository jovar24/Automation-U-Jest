const fetchDataOverApi = require('./fetchData')

// non-async example
test('the user data for user 1', () => {
    const data = fetchDataOverApi()
    expect(data).toBe('john')
})


// async example
test('the user data for user 1', async () => {
    const data = await fetchDataOverApi()
    expect(data).toBe('john')
})