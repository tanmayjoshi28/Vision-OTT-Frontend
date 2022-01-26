import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { Video } from 'src/app/models/video/video';
import { UserService } from 'src/app/services/auth/user.service';
import { VideoService } from 'src/app/services/videoContent/video.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
	selector: 'app-edit-video',
	templateUrl: './edit-video.component.html',
	styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {
	currentVideo: Video = {
		ownerId: -1,
		category: '',
		title: '',
		description: '',
		videoId: '',
		embedLink: '',
		imageLink: '',
	}
	categories = [
		{ id: 'INFORMATION', title: 'INFORMATION' },
		{ id: 'MUSIC', title: 'MUSIC' },
		{ id: 'COMEDY', title: 'COMEDY' },
		{ id: 'TECHNOLOGY', title: 'TECHNOLOGY' },
		{ id :'SPORTS', title:'SPORTS'},
		{ id:'OTHERS', title:'OTHERS'}
	]
	currentUser:User = {id:-1, name:'', email:'', dob:'', bookmarks:[],password:''}
	title = '';
	description = '';
	videoId = '';
	selectedOption = '-'
	message =''

	constructor(private route: Router, 
		private activeRoute: ActivatedRoute,
		private videoServices: VideoService, 
		private userServices: UserService, 
		private _sanitizer: DomSanitizer
	) { }

	ngOnInit(): void {
		const videoId = this.activeRoute.snapshot.paramMap.get('videoId');
		this.currentVideo = this.videoServices.getVideoById(!videoId? '': videoId);
		this.currentUser = this.userServices.getCurrentUser();
		this.title = this.currentVideo.title;
		this.description = this.currentVideo.description;
		this.videoId = this.currentVideo.videoId;

	}
	
	editCurrentVideo() {
		if(this.title==='' || this.description==='' || this.selectedOption===''){
			this.message = 'Incomplete fields'
			return;
		}
		this.videoServices.editVideo(this.videoId, this.title, this.description, this.selectedOption)
		this.route.navigateByUrl('/')
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
}

