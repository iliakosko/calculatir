import {SimplCommand} from "./SimplCommand";

export class SqrtCommand extends SimplCommand{

    execute(degree){
        this.value = this.value** degree
        return this.value
    }

    undo(degree){
        this.value = this.value**(1/degree)
        return this.value
    }
}
