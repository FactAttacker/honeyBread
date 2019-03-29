const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    console.log(`마스터 프로세스 아이디: ${process.pid}`);
    //CPU 개수만큼 워커를 생산
    for(let i =0; i < numCPUs; i += 1 ){
        cluster.fork();
    }
    //d워커가 종료되었을 때
    cluster.on('exit', (worker, code, signal) =>{
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
        cluster.fork();//포크로 접속 코어 실행 (종료 후 새로운 워커가 실행한다.)
    });

}else{
    //워커들이 포트에서 대기
    http.createServer( (req,res)=>{
        res.write('<h1>Hello Node</h1>');
        res.end('<p>Hello Cluster</p>');

        //CPU 코어 개수에 따라서 실행되어 1초후 종료 
        settimeout(()=>{
            process.exit(1);
        },1000); //요청이 들어올때마다 1초후 종료

    }).listen(8085);

    console.log(`${process.pid}번 워커 실행`);
}