const exp = require('constants');
const Algo = require('./Algo');

describe('reverse', () => {
    test('this should reverse a given string', () => {
        const algo = new Algo();
    
        const expected = 'eldoon'
        const actual = algo.reverse('noodle');
    
        expect(actual).toEqual(expected);
    })
    test('this should return empty string', () => {
        const algo = new Algo();
    
        const expected = ''
        const actual = algo.reverse('');
    
        expect(actual).toEqual(expected);
    })
    test('this should return empty string when no argument is passed', () => {
        const algo = new Algo();
    
        const expected = '';
        const actual = algo.reverse();
    
        expect(actual).toEqual(expected);
    })
})
describe('ispalindrom', () => {
    test('this should return true for "noon"', () => {
        const algo = new Algo();

        const expected = true;
        const actual = algo.isPalindrome('noon');

        expect(actual).toEqual(expected);
    })
    test('this should return false for "moon"', () => {
        const algo = new Algo();

        const expected = false;
        const actual = algo.isPalindrome('moon');

        expect(actual).toEqual(expected);
    })
    test('this should return true for "race car"', () => {
        const algo = new Algo();

        const expected = true;
        const actual = algo.isPalindrome('race car');

        expect(actual).toEqual(expected);
    })
    test('this should return false when no arguments are passed', () => {
        const algo = new Algo();

        const expected = false;
        const actual = algo.isPalindrome();

        expect(actual).toEqual(expected);
    })
})

describe('capitlaised',() => {
    test('this should return capitalised string when lower case', () => {
        const algo = new Algo();

        const expected  = 'Big Ben'
        const actual = algo.capitalised("big ben");

        expect(actual).toEqual(expected);
    });

    test('this should return capitalised string when mixed', () => {
        const algo = new Algo();

        const expected = 'Big Ben';
        const actual = algo.capitalised("bIg BEn");

        expect(actual).toEqual(expected);
    });

    test('this should return capitalised string when upper case', () => {
        const algo = new Algo();

        const expected = 'Big Ben';
        const actual = algo.capitalised("BIG BEN");

        expect(actual).toEqual(expected);
    });
    test('this should return an empty string when no arguments are passed', () => {
        const algo = new Algo();

        const expected = '';
        const actual = algo.capitalised();

        expect(actual).toEqual(expected);
    });
    test('this should return an empty string when an empty string is passed', () => {
        const algo = new Algo();

        const expected = '';
        const actual = algo.capitalised('');

        expect(actual).toEqual(expected);
    });
})