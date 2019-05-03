'use strict';

var expect = require('chai').expect;
var DateFormatter = require('../index');

describe('#DateFormatter', function() {
    // it('Get current date and time', function() {
    //     var result = DateFormatter.GetDateTime();
    //     expect(result).to.equal(new Date());
    // });
    it('Get current date alone ', function() {
        var currentdate = new Date();
        var result = DateFormatter.GetFullDate();
        expect(result).to.equal(currentdate.toLocaleDateString());
    });
    it('Get Formatted Date ', function() {
        var result = DateFormatter.FormatDate('mm/dd/yy','*');
        expect(result).to.equal(currentdate.toLocaleDateString());
    });

    
});