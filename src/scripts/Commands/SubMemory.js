export class SubMemory {

    execute(currentValue){
        let cV = parseFloat(currentValue.replace(',', ''))
        let memoryVal = parseFloat(localStorage.getItem('val'))
        if(isNaN(memoryVal)){
            localStorage.setItem('val', cV)
        }
        else{
            let rez = memoryVal - cV
            localStorage.setItem('val', rez)
        }        
    }

    
}
