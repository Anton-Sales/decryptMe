const decryptMe = require('./index')

test('the code is houston we have a problem', () => {
    let encryptedText = 'knlfgnb, sj koqj o yvnewju'
    let expected = 'houston, we have a problem'

    let actual = decryptMe(encryptedText)

    expect(actual).toBe(expected)
})