import {SimplCommand} from "./SimplCommand";

export class FactCommand extends SimplCommand{

    execute(){
        if (this.value === 0 || this.value === 1)
            return 1;
        for (let i = this.value - 1; i >= 1; i--) {
            this.value *= i;
        }
        return this.value

    }

    undo(){
        return 0
    }
}
