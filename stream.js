"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stream_1 = require("stream");
var fs = require('fs');
// const readStream = fs.createReadStream('data.txt' , {highWaterMark: 10})
// readStream.on('data' , (chunk : string)=>{
//     console.log(chunk.toString());
// })
// readStream.on('end', ()=>
// {
//     console.log("File Readed Successfully");
// })
// const writeAndRead = ()=>
// {
//     let readStream = fs.createReadStream("read.txt")
//     let writeStream =  fs.createWriteStream("write.txt")
//     readStream.pipe(writeStream)
// }
// writeAndRead()
function manipulateData(chunk) {
    return (chunk.toString().toUpperCase());
}
var readFile = 'read.txt';
var writeFile = 'write.txt';
var readStream = fs.createReadStream(readFile);
var writeStream = fs.createWriteStream(writeFile);
readStream.on('data', function (chunk) {
    var manipulatedChunk = manipulateData(chunk);
    writeStream.write(manipulatedChunk);
});
var duplexStream = new stream_1.Duplex({
    read: function () { },
    write: function (chunk, encoding, callback) {
        var manipulatedChunk = manipulateData(chunk);
        this.push(manipulatedChunk);
        callback();
    },
});
var writeStreamDuplex = fs.createWriteStream(writeFile);
duplexStream.pipe(writeStreamDuplex);
fs.createReadStream(readFile).pipe(duplexStream);
