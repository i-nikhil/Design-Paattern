/**
 * Used to limit the number of instances of an object to atmost one.
 */
class ProcessManager {
    #instance
    constructor() {
        this.#instance = null
    }
    static createProcessManager() {
        if (!this.instance)
            this.instance = new ProcessManager();
        return this.instance
    }
    startProcess(p){
        console.log(`Process ${p} Starting . . .`);
    }
}

let pm1 = ProcessManager.createProcessManager();
pm1.startProcess('A');
let pm2 = ProcessManager.createProcessManager();
pm2.startProcess('B');

console.log(pm1 === pm2);