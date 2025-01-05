class Person{
    constructor(fname, laname){
        this.fname = fname;
        this.lname = laname;    
    }

    get fname(){
        return this.fname
    }
    set fname(name){
        this.fname = name
    }
}

new Person("Ahmed", "Ali") // Uncaught RangeError: Maximum call stack size exceeded