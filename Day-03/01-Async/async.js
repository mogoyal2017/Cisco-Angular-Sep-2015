/* Sync */
function addSync(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var result = x + y;
    console.log("[SP] returning result");
    return result;
}

function addSyncClient(x,y){
    console.log("[SC] triggering operation");
    var result = addSync(x,y);
    console.log("[SC] result = ", result);
}

/* Async - callbacks*/
function add(x,y, onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning result");
        if (onResult) onResult(result);
    },3000);
}

function addClient(x,y){
    console.log("[SC] triggering operation");
    add(x,y, function(result){
        console.log("[SC] result = ", result);
    });
}

/* Async - Events*/
function getAdder(){
    var handlers = [];
    function add(x,y){
        console.log("[SP] processing ", x , " and ", y);
        setTimeout(function(){
            var result = x + y;
            console.log("[SP] returning result");
            handlers.forEach(function(handler){
                handler(result);
            });
        },3000);
    }
    function addSubscriber(handlerFn){
        handlers.push(handlerFn);
    }
    return {
        add : add,
        subscribe : addSubscriber
    };
}


/*Async - Promises*/
function add(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = x + y;
            console.log("[SP] returning result");
            resolve(result);
        },3000);
    });
    return promise;
}

var p = add(100,200)
p.then(function(result){

})
p.catch(function(){

})
