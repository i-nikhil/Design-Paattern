/*
Defines a one-to-many dependency relation between one object(subject)
to other dependent objects(observers). When subject changes its state,
all observers are notified automatically.
*/

class Subject{
    #observers
    #state
    constructor(){
        this.#observers = []
        this.#state = 1
    }
    set state(state){
        if(this.#state != state)
        {
            this.#state = state
            console.log(`State changed to ${state}`);
            this.#notifyAll()
        }
    }
    subscribe(observer){
        this.#observers.push(observer)
    }
    unsubscribe(observer){
        this.#observers = this.#observers.filter((obs) => obs != observer)
    }
    #notifyAll(){
        if(this.#observers.length == 0) console.log('No subscriber');
        else this.#observers.forEach((obs) => obs())
    }
}

let subject = new Subject();

let ob1 = function(){
    console.log('Observer 1 notified');
}
let ob2 = function(){
    console.log('Observer 2 notified');
}
let ob3 = function(){
    console.log('Observer 3 notified');
}

subject.subscribe(ob1)
subject.subscribe(ob2)

subject.state = 2

subject.unsubscribe(ob1)

subject.state = 3

subject.subscribe(ob3)

subject.state = 4

subject.unsubscribe(ob2)
subject.unsubscribe(ob3)

subject.state = 4
subject.state = 5

subject.subscribe(ob1)
subject.subscribe(ob2)
subject.subscribe(ob3)

subject.state = 6
subject.state = 6