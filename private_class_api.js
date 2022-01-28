class Lestar{

    #name;
    #privateArray;

    constructor(){
        this.#privateArray=[];				
    }

    showAllConsole(){
        console.log(this);
    }

    add(name,value=null){
        this.#privateArray[name]=value;
    }

    set(name,value){
        this.#privateArray[name]=value;
    }

    get(name){
        return this.#privateArray[name];
    }
    
    getName(){
        return this.#name;
    }

    createName(name){
        this.#name=name;
    }

    static createObject(ilosc, czy_id=null){

        let tabObjs = new Array(ilosc);

        for(let i=0; i<ilosc; i++){
            tabObjs[i]=new LestarObject();
            if(czy_id==null || czy_id==true){
                tabObjs[i].add('id', i);
            }
        }

        return tabObjs;
    }

    static showAllInArrayToConsole(array){
        for(let i=0; i<array.length; i++){
            array[i].showAllConsole();
        }
    }

}

class LestarObject extends Lestar{
    constructor(){
        super();
    }
}
