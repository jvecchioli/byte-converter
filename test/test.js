var converter = require('./../lib/byte-converter');

var assert = require("assert");

describe('Unit Converter', function() {
    it('Should return 25000 MB. Initial value: 25 GB', function (done) {
        var result = converter(25, 'GB', 'MB');
        assert.equal(result, 25000);
        done();
    });

    it('Should return 1.5 GB. Initial value: 1500 MB', function (done) {
        var result = converter(1500, 'MB', 'GB');
        assert.equal(result, 1.5);
        done();
    });

    it('Should throw an Error (Empty strings)', function (done) {
        var fn = function(){
            converter(0, '', '');
        };
        assert.throws(fn, Error, "Unit must be set.");
        done();
    });

    it('Should throw an Error (undefined strings)', function (done) {
        var fn = function(){
            converter(0);
        };
        assert.throws(fn, Error, "Unit must be set.");
        done();
    });

    it('Should return 1.5 GB. Initial value: 1500 MB', function (done) {
        var result = converter(-1500, 'MB', 'GB');
        assert.equal(result, -1.5);
        done();
    });
});