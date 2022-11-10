import {SimplCommand} from "./SimplCommand";

export class OneCommand extends SimplCommand{

    execute(){
        this.value = 1 / this.value
        return this.value
    }

    undo(){
        this.value = this.value**(1/degree)
        return this.value
    }
}
