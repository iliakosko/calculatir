import {SimplCommand} from "./SimplCommand";

export class XYDegreeCommand extends SimplCommand{

    execute(currentValue){
        if(currentValue !== 0){
            console.log("asdfadf")
            this.value = this.value** (1/currentValue)
        } else{
            return 0
        }
        return this.value

    }

    undo(currentValue){
        if(currentValue !== 0){
            this.value = this.value** currentValue
        } else{
            return 0
        }
        return this.value
    }
}
