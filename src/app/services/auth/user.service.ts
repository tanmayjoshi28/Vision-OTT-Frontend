import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';
import dummyUsers
 from 'src/dummydata/dummyUsers';
@Injectable({
	providedIn: 'root'
})
export class UserService {
	userData: User[] = dummyUsers;
	currentUser:User = {id:-1, name:'', email:'', dob:'', password:''}
	constructor() { }
	setUsers(input: User) {
		this.userData.push(input)
	}
	getUsers(): User[] {
		return this.userData;
	}
	totalUsers(): number {
		return this.userData.length;
	}
	authenticate(email: string, password: string): boolean {
		for(var i=0; i<this.userData.length; i++){
			if(email==this.userData[i].email && password==this.userData[i].password){
				this.currentUser = this.userData[i];
				return true;
			}
		}
		return false;
	}
	getCurrentUser():User{
		return this.currentUser
	}
}
