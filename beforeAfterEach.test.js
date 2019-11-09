const setupFirst = () => console.log('setting up before test run')
const tearDownNow = () => console.log('finish up after test run')

describe('new account creations checks', () => {
    beforeEach(() => setupFirst())
    afterEach(() => tearDownNow())

    test('new account 1 created', () => {
        const account = 'account1'
        expect(account).toEqual('account1')
    })
    test('new account 2 created', () => {
        const account = 'account2'
        expect(account).toEqual('account2')
    })
})