function decryptMe(et) {
    let result = []
    et = et.split('')
    let map = {
        a: 'k',
        b: 'n',
        c: 'y',
        d: 'j',
        e: 'b',
        f: 's',
        g: 't',
        h: 'd',
        i: 'f',
        j: 'e',
        k: 'h',
        l: 'u',
        m: 'z',
        n: 'o',
        o: 'a',
        p: 'c',
        q: 'v',
        r: 'x',
        s: 'w',
        t: 'q',
        u: 'm',
        v: 'r',
        w: 'l',
        x: 'i',
        y: 'p',
        z: 'g',
        ',': ',',
        ' ': ' '
    }
    for (let i = 0; i < et.length; i++) {
        let position = et[i]
        result.push(map[position])
    }
    return result.join('')
}

let encryptedText = 'knlfgnb, sj koqj o yvnewju'

decryptMe(encryptedText)

module.exports = decryptMe

