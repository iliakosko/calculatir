import {SimplCommand} from "./SimplCommand";

export class MultCommand extends SimplCommand{

    execute(currentValue){
        this.value = currentValue * this.value
        return this.value
    }

    undo(currentValue){
        return currentValue / this.value
    }
}
