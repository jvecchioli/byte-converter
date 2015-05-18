var smallest = require('./../lib/byte-converter').getSmallestUnit;

var assert = require("assert");

describe('Smallest Unit', function() {
    it('Should return B', function (done) {
        var small = smallest('MB', 'TB', 'B', 'PB', 'ZB');
        assert.equal(small, 'B');
        done();
    });

    it('Should return KB', function (done) {
        var small = smallest('MB', 'TB', 'KB', 'PB');
        assert.equal('KB', small);
        done();
    });

    it('Should return MB', function (done) {
        var small = smallest('MB', 'TB', 'PB', 'ZB');
        assert.equal('MB', small);
        done();
    });

    it('Should return GB', function (done) {
        var small = smallest('GB', 'TB', 'PB', 'ZB');
        assert.equal('GB', small);
        done();
    });
});