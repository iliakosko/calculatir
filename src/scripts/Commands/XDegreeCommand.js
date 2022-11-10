import {SimplCommand} from "./SimplCommand";

export class XDegreeCommand extends SimplCommand{

    execute(currentValue){
        var startVal = this.value
        for(var i = 0; i<currentValue-1; i++){
            this.value = this.value* startVal
        }
        return this.value

    }

    undo(currentValue){
        var startVal = this.value
        for(var i = 0; i<currentValue-1; i++){
            this.value = this.value/ startVal
        }
        return this.value
    }
}
