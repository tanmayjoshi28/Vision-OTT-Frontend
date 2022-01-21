export class User {
    id:number
    name:string
    email:string
    dob:string
    password:string
    constructor(id:number,name:string, dob:string, email:string, password:string){
        this.id = id,
        this.name = name,
        this.dob = dob,
        this.email = email,
        this.password = password
    }
    
}
