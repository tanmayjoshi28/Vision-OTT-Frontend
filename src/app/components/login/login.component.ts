import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/auth/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email = '';
    password ='';
    message =''
    constructor(private router: Router , private userServices:UserService) { }
    ngOnInit(): void {

    }
    logInUser(){
        const isAuthenticated = this.userServices.authenticate(this.email,this.password);
        if(isAuthenticated){
            this.router.navigateByUrl('/')
        }
        else{
            this.message = 'Check credentials'
        }
    }
    navigateToRegister(){
        this.router.navigateByUrl('/register')
    }
    
}
