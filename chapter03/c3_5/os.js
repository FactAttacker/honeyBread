const os = require('os');

console.log('운영체제 정보 -----------------------------------');
console.log('os.arch(): '    ,os.arch() );          // process.arch 와 동일
console.log('os.platfrom(): ',os.platform() );      // process.platform 과 동일
console.log('os.type(): '    ,os.type() );          // 운영체제의 종류를 보여준다
console.log('os.uptime(): '  ,os.uptime() );        // 
console.log('os.hostname(): ',os.hostname() );
console.log('os.release(): ' ,os.release() );

console.log('운영체제 정보 -----------------------------------');

console.log('os.homedir(): ' ,os.homedir() );
console.log('os.tmpdir(): '  ,os.tmpdir() );

console.log('cpu 정보 -----------------------------------');

console.log('os.cpus(): '           ,os.cpus() );
console.log('os.cpus().length: '    ,os.cpus().length );

console.log('cpu 정보 -----------------------------------');

console.log('os.freemem(): '        ,os.freemem() );
console.log('os.totalmem(): '       ,os.totalmem() );

