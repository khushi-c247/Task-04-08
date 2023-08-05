import * as http from "http";
import * as fs from "fs";

const Server = http.createServer((req, res) => {

    //Get data from file
    if (req.method === "GET") {
        fs.readFile("data.txt", (err, data) => {
            if (err) {
                console.log(err);
            }
            res.end(data);
        });
    } 

    //Save data to the data.txt file
    else if (req.method === "POST") {
        let data : string = " ";
        req.on("data", (chunk: string) => {
            data += chunk;
            fs.writeFile("data.txt", data, (err) => {
                if (err) {
                    console.log(err);
                }
              res.end(`This Data is saved succsessfully: ${data}`);
            });
        });}

});
  

Server.listen(3000, () => {
    console.log("servert activated at port 3000");
});
