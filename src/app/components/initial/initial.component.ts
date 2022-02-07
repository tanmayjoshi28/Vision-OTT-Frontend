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
	currentUser:User = {id:-1, username:'', email:'', dob:'', bookmarks:[],password:''}
	searchInput = '';
	searchString= '';

	constructor(private route: Router, private videoServices: VideoService, private userServices: UserService) { }
	async ngOnInit(){
		this.allVideos = this.videoServices.allVideos;
		this.currentUser = this.userServices.getCurrentUser();
	}
	navigateToLogin() {
		this.route.navigateByUrl('/login');
	}
	navigateToHome(){
		this.route.navigateByUrl('/');
	}
	navigateToProfile(id:number){
		this.route.navigateByUrl(`/user/${id}`)
	}
	navigateToAddVideo(){
		this.route.navigateByUrl('/add-video')
	}
	navigateToWatching(videoId:string){
		this.route.navigateByUrl(`/watching/${videoId}`)
	}
	logout(){
		this.route.navigateByUrl('/login');
	}
	setSearchVariable(){
		this.searchString = this.searchInput;
	}
	bookMark(videoId:string){
		this.userServices.bookMarkVideo(videoId);
		this.currentUser = this.userServices.getCurrentUser();
	}
	unMark(videoId:string){
		this.userServices.unMarkVideo(videoId)
	}
}
