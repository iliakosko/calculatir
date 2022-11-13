export class ReadMemory {

    execute(){
        return parseFloat(localStorage.getItem('val'))    
    }

    
}