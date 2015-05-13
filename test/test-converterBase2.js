var converter = require('./../lib/byte-converter').converterBase2;

var assert = require("assert");

describe('Unit Converter base 2', function() {
    it('Should return 1024 B. Initial value: 1KB', function (done) {
        var result = converter(1, 'KB', 'B');
        assert.equal(result, 1024);
        done();
    });

    it('Should return 1KB. Initial value: 1024 B', function (done) {
        var result = converter(1024, 'B', 'KB');
        assert.equal(result, 1);
        done();
    });

    it('Should return 1024KB. Initial value: 1MB', function (done) {
        var result = converter(1, 'MB', 'KB');
        assert.equal(result, 1024);
        done();
    });

    it('Should return 25600 MB. Initial value: 25 GB', function (done) {
        var result = converter(25, 'GB', 'MB');
        assert.equal(result, 25600);
        done();
    });

    it('Should return 1.5 GB. Initial value: 1500 MB', function (done) {
        var result = converter(1536, 'MB', 'GB');
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

    it('Should return -1.5 GB. Initial value: -1536 MB', function (done) {
        var result = converter(-1536, 'MB', 'GB');
        assert.equal(result, -1.5);
        done();
    });
});