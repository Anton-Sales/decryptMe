const {decrypt, encrypt} = require('./index')

test('example 1', () => {
    const cipher = 'zodvqukgwefbyitmrsplhacxnj'
    const encrypt = 'dzs'
    const expected = 'car'

    const actual = decrypt(encrypt, cipher)

    expect(actual).toBe(expected)
})

test('example 1 encrypt', () => {
    const cipher = 'zodvqukgwefbyitmrsplhacxnj'
    const string = 'car'
    const expected = 'dzs'

    const actual = encrypt(string, cipher)

    expect(actual).toBe(expected)
})

test('example 2', () => {
    const cipher = 'xipmuzfkbrlwotjancqgveshdy'
    const encrypt = 'skd qj qucbjvq?'
    const expected = 'why so serious?'

    const actual = decrypt(encrypt, cipher)

    expect(actual).toBe(expected)
})

test('example 2 encrypt', () => {
    const cipher = 'xipmuzfkbrlwotjancqgveshdy'
    const string = 'why so serious?'
    const expected = 'skd qj qucbjvq?'

    const actual = encrypt(string, cipher)

    expect(actual).toBe(expected)
})

test('Challenge', () => {
    const cipher = 'oephjizkxdawubnytvfglqsrcm'
    const encrypt = 'knlfgnb, sj koqj o yvnewju'
    const expected = 'houston, we have a problem'

    const actual = decrypt(encrypt, cipher)

    expect(actual).toBe(expected)
})


test('Challenge encrypt', () => {
    const cipher = 'oephjizkxdawubnytvfglqsrcm'
    const string = 'houston, we have a problem'
    const expected = 'knlfgnb, sj koqj o yvnewju'

    const actual = encrypt(string, cipher)

    expect(actual).toBe(expected)
})  