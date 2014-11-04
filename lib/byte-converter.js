var description = require('./unit-description');

function converter(value, originalUnit, targetUnit) {
    if(_isEmpty(originalUnit)  || _isEmpty(targetUnit)){
        throw new Error('Unit must be set.');
    }
    var power = description[originalUnit].power10 - description[targetUnit].power10;
    var result = value * Math.pow(10, power);
    return result;
}

function _isEmpty(s){
    if(s === undefined || s.length == 0){
        return true;
    }
    return false;
}

module.exports = converter;
