import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	userData: User[] = [];
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
				return true;
			}
		}
		return false;
	}
}
