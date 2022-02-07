export class User {
    id:number
    username:string
    email:string
    dob:string
    bookmarks:string[]
    password:string
    constructor(id:number,name:string, dob:string, email:string, bookmarks:string[] ,password:string,){
        this.id = id,
        this.username = name,
        this.dob = dob,
        this.email = email,
        this.bookmarks = bookmarks,
        this.password = password
    } 
}
