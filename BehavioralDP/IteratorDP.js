class Iterator{
    #list
    #index
    #rev_index
    constructor(list){
        this.#list = list
        this.#index = 0
        this.#rev_index = list.length - 1
    }
    hasNext(){
        return this.#index < this.#list.length
    }
    hasPrev(){
        return this.#rev_index >= 0
    }
    next(){
        return this.#list[this.#index++]
    }
    prev(){
        return this.#list[this.#rev_index--]
    }
}

let arr = [1, 'Nikhil', true, 2.33, {a: 2}]
let i = new Iterator(arr)
while(i.hasNext()) console.log(i.next())
while(i.hasPrev()) console.log(i.prev())