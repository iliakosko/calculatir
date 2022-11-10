import {SimplCommand} from "./SimplCommand";

export class DivCommand extends SimplCommand{

    execute(currentValue){
        if(currentValue === 0){
            return 0;
        }else{
            this.value = this.value / currentValue
            return this.value
        }
    }

    undo(currentValue){
        this.value = currentValue * this.value
        return this.value
    }
}
