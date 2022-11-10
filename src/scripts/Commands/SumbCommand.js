import {SimplCommand} from "./SimplCommand";

export class SumbCommand extends SimplCommand{

    execute(){

        this.value = (-1) * this.value
        return this.value

    }

    undo(){
        this.value = (-1) * this.value
        return this.value
    }
}
