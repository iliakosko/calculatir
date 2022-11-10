import {SimplCommand} from "./SimplCommand";

export class SubtCommand extends SimplCommand{
    execute(currentValue){
        this.value = this.value - currentValue
        return this.value
    }

    undo(currentValue){
        this.value = this.value + currentValue
        return this.value
    }
}
