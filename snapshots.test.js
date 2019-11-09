
var itemStock = [
    { 'id': '1', 'itemName': 'bike', 'stock': '10' },
    { 'id': '2', 'itemName': 'monkey', 'stock': '8' },
    { 'id': '3', 'itemName': 'flour', 'stock': '13' },
    { 'id': '4', 'itemName': 'monkey', 'stock': '2' },
    { 'id': '5', 'itemName': 'apples', 'stock': '30' },
]

function filterItemStock(arr, key, term) {
    return arr.filter(function (obj) {
        return obj[key] === term
    })
}

test('returns all items with matching id', () => {
    expect(filterItemStock(itemStock, 'id', '1')).toEqual([
        { 'id': '1', 'itemName': 'bike', 'stock': '10', }
    ])
})
test('returns all items with matching itemName', () => {
    expect(filterItemStock(itemStock, 'itemName', 'monkey')).toBe([
        { 'id': '2', 'itemName': 'monkey', 'stock': '8' },
        { 'id': '4', 'itemName': 'monkey', 'stock': '2' },
    ])
})