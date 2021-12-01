var events = require('events');
var scoreKeeper = new events.EventEmitter();
a = [false, 0];
b = [false, 0];
var shoot_a_basket = function () {
    if (a[0] == true) {
        console.log('Team a has scored'); 
        a[0] = false;
        a[1] += 1;
    }
    else if (b[0] == true) {
        console.log('Team b has scored'); 
        b[0] = false;
        b[1] += 1;
    }else if(a[0] == false){
        console.log('Team b has made unsuccessful attempt')
    }else{
        console.log('Team a has made unsuccessful attempt')
    }
    console.log('Number of Basket by Team a :' + a[1]); 
    console.log('Number of Basket by Team b :' + b[1]);
}
scoreKeeper.on('basket', shoot_a_basket); 
scoreKeeper.emit('basket', a[0] = true);
scoreKeeper.emit('basket', b[0] = true); 
scoreKeeper.emit('basket', a[0] = true);
scoreKeeper.emit('basket', a[0] = true);
scoreKeeper.emit('attempt', a[0] = false);
scoreKeeper.emit('basket', a[0] = true);
scoreKeeper.emit('attempt', b[0] = false);
scoreKeeper.emit('basket', b[0] = false);