import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../../models/video/video';
import { VideoService } from '../../services/videoContent/video.service';
import { UserService } from 'src/app/services/auth/user.service';
import { User } from 'src/app/models/user/user';

@Component({
	selector: 'app-initial',
	templateUrl: './initial.component.html',
	styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
	allVideos:Video[] = []
	currentUser:User = {id:-1, name:'', email:'', dob:'', password:''}
	searchInput = '';
	searchString= '';

	constructor(private route: Router, private videoServices: VideoService, private userServices: UserService) { }
	ngOnInit(): void {
		this.allVideos = this.videoServices.getAllVideos();
		this.currentUser = this.userServices.getCurrentUser();
	}
	navigateToLogin() {
		this.route.navigateByUrl('/login');
	}
	setSearchVariable(){
		this.searchString = this.searchInput;
	}

}
