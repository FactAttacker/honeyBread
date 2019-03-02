const fs = require('fs');

console.log('시작');
fs.writeFile('./readme.txt', '글이 입력됩니다', (err) => {
    if(err){
        throw err;
    }
    fs.readFile('./readme.txt',(err, data) => {
        if(err){
            throw err;
        }
        console.log('1번',data.toString());
    });
    fs.readFile('./readme.txt',(err, data) => {
        if(err){
            throw err;
        }
        console.log('2번',data.toString());
    });

    fs.readFile('./readme.txt',(err, data) => {
        if(err){
            throw err;
        }
        console.log('3번',data.toString());
    });
    console.log('끝');
});