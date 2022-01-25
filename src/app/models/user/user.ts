export class User {
    id:number
    name:string
    email:string
    dob:string
    bookmarks:string[]
    password:string
    constructor(id:number,name:string, dob:string, email:string, bookmarks:string[] ,password:string,){
        this.id = id,
        this.name = name,
        this.dob = dob,
        this.email = email,
        this.bookmarks = bookmarks,
        this.password = password
    } 
}
