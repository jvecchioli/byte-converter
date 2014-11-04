#byte-converter

Converts different units of Bytes.
Currently supported units are B, KB, MB, GB, TB, PB. Those units are stored inside a description file 'lib/unit-description.js'.

## Installation
    npm install byte-converter

## Usage
```javascript
var converter = require('byte-converter');
var result = converter(1, 'MB', 'KB'); //returns 1000

