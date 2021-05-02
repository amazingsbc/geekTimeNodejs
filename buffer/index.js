const protobuf = require('protocol-buffers');
const fs = require('fs');
const schema = protobuf(fs.readFileSync(__dirname + '/test.proto','utf-8'));

const tmp = schema.Column.encode({
    id : 1,
    name : 'node js',
    price : 80.4
});

console.log(schema.Column.decode(tmp))