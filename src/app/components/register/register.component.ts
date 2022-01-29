import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user/user';
import { UserService } from '../../services/auth/user.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	name = '';
	dob = '';
	email = '';
	password = '';
	checkPassword = '';
	message =' '
	constructor(private route: Router, private userServices:UserService) { }
	ngOnInit(): void {

	}
	registerUser(){
		const totalUsers = this.userServices.totalUsers();
		const id = totalUsers+1;
		if(this.name=='' || this.dob=='' || this.email =='' || this.password==''){
			this.message = 'Fields Incomplete';
			return;
		}
		if(this.password.length<8){
			this.message = 'Min Password Length is 8';
			return;
		}
		if(this.password!=this.checkPassword){
			this.message = 'Passwords do not match';
			return;
		}
		const alreadPresent = this.userServices.checkDuplicate(this.email);
		if(alreadPresent){
			this.message = 'Email Already Present';
			return;
		}
		
		const newUser = new User(id, this.name, this.dob,this.email, [] ,this.password);
		this.userServices.setUsers(newUser);
		this.route.navigateByUrl('/login');
	}
	navigateToLogin(){
		this.route.navigateByUrl('/login');
	}
}
