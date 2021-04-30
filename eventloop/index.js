const eventloop = {
    queue : [],
    loop(){
        while(this.queue.length){
            var callback = this.queue.unshift();
            callback();
        }
         
        setTimeout(this.loop.bind(this),50);
    }
}
function add(callback) {
    eventloop.queue.push(callback);
    console.log(eventloop.queue);
}
    
eventloop.loop()

setTimeout(()=>{
    add(function(){
        console.log(1)
    })
},500);