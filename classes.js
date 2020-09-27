class Materializer {
    constructor(target, activated) {   
    this.target = target
    this.activated = false
    }

    activate (target, activated)  {
        console.log('true')
        this.activated = true 
    }
    materialize(target, activated){
        if (this.activated === true){
        return this.target 
    }
}
}
