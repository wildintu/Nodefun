let path = require('path');
let fs = require('fs');
let request = require('request');

let dataPath = path.join(__dirname, '../data.json');

request('https://reddit.com/r/popular.json', (err, res, body) => {
    
    if(err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        fs.appendFileSync(dataPath, item.data.title + '\n');
    })



});