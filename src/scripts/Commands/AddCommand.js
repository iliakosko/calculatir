import {SimplCommand} from "./SimplCommand";

export class AddCommand extends SimplCommand{

    execute(currentValue){
        this.value = currentValue + this.value
        return this.value
    }

    undo(currentValue){
        this.value = currentValue - this.value
        return this.value
    }
}
