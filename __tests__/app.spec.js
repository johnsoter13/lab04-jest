'use strict';

import { greet, invertCase } from '../js/app'; //import the functions to test!

/* tests go here */


describe('Basic Math', function () {
    //tests
    it('should add numbers correctly', function () {
        //whateva we want;
        let result = 1 + 1;

        //assertion to check that things match
        expect(result).toEqual(2);
    });


});

describe('invertCase() function', function() {
    it('testing invertCase()', function(){
        let string = 'StRiNg';

        expect(invertCase(string)).toEqual('sTrInG');
    });
})