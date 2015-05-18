var description = require('./unit-description');

function converter(value, originalUnit, targetUnit) {
    if (_isEmpty(originalUnit) || _isEmpty(targetUnit)) {
        throw new Error('Unit must be set.');
    }
    var power = description[originalUnit].power10 - description[targetUnit].power10;
    var result = value * Math.pow(10, power);
    return result;
}

function convertBase2(value, originalUnit, targetUnit) {
    if (_isEmpty(originalUnit) || _isEmpty(targetUnit)) {
        throw new Error('Unit must be set.');
    }
    var power = description[originalUnit].power2 - description[targetUnit].power2;
    var result = value * Math.pow(2, power);
    return result;
}

function getSmallestUnit(units) {
    var arrUnits = Array.prototype.slice.call(arguments, 0)
    var smallestUnit = {
        power : null,
        name : null
    };

    for (var i = 0; i < arrUnits.length; i++) {
        var currentUnit = arrUnits[i];
        var currentPower = description[currentUnit].power10;
        if(!smallestUnit.name){
            smallestUnit.name = currentUnit;
            smallestUnit.power = currentPower;
        }else{
            if(smallestUnit.power > description[currentUnit].power10){
                smallestUnit.name = currentUnit;
                smallestUnit.power = currentPower;
            }
        }
    }
    return smallestUnit.name;
}

function _isEmpty(s) {
    if (s === undefined || s.length == 0) {
        return true;
    }
    return false;
}
var interface = {
    converterBase10: converter,
    converterBase2: convertBase2,
    getSmallestUnit: getSmallestUnit
};

module.exports = interface;