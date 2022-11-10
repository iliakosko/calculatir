import {SimplCommand} from "./SimplCommand";

export class PersCommand extends SimplCommand{

    execute(){

        this.value = this.value/100
        return this.value

    }

    undo(){
        this.value =  this.value * 100
        return this.value
    }
}
