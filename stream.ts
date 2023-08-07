import { Duplex, getDefaultHighWaterMark } from "stream"

const fs = require ('fs')

//Manually Read and Write data

// const readStream = fs.createReadStream('data.txt' , {highWaterMark: 10})
// readStream.on('data' , (chunk : string)=>{
//     console.log(chunk.toString()); 
// })

// readStream.on('end', ()=>
// {
//    console.log("File Readed Successfully");
    
// })

// const writeAndRead = ()=>
// {
//     let readStream = fs.createReadStream("read.txt")
//     let writeStream =  fs.createWriteStream("write.txt")
//     readStream.pipe(writeStream)
// }

// writeAndRead()

//Data read and write using Dupelex
function manipulateData(chunk: String): String {
      return (chunk.toString().toUpperCase());
    }

    const readStream = fs.createReadStream('read.txt');
    const writeStream = fs.createWriteStream('write.txt');
    
    readStream.on('data', (chunk: String) => {
      const manipulatedChunk = manipulateData(chunk);
      writeStream.write(manipulatedChunk);
    });

const duplexStream = new Duplex({
      read() {},
      write(chunk) {
      const manipulatedChunk = manipulateData(chunk);
      this.push(manipulatedChunk);
     },
    });
