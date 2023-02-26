const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    // a4304c5cf172dd21f37f18a373011cc09b334971b0b2c84fa96ae3900a78d624
    it('generates a SHA - 256 hased output', () => {
        expect(cryptoHash('nhatnt4')).toEqual('a4304c5cf172dd21f37f18a373011cc09b334971b0b2c84fa96ae3900a78d624');
    });

    it('produces the same hash with the same input arguments in any order', () => {
        expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'one', 'two'));
    })
});