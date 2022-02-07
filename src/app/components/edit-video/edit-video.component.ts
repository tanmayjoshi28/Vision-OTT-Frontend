import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { Video } from 'src/app/models/video/video';
import { UserService } from 'src/app/services/auth/user.service';
import { VideoService } from 'src/app/services/videoContent/video.service';

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
	currentUser:User = {id:-1, username:'', email:'', dob:'', bookmarks:[],password:''}
	title = '';
	description = '';
	videoId = '';
	selectedOption = '-'
	message =''

	constructor(private route: Router, 
		private activeRoute: ActivatedRoute,
		private videoServices: VideoService, 
		private userServices: UserService, 
	) { }

	async ngOnInit(): Promise<void> {
		const videoId = this.activeRoute.snapshot.paramMap.get('videoId');
		(await this.videoServices.getVideoById(!videoId ? '' : videoId))
			.subscribe({
				next:(video)=>{
					this.currentVideo = video;
					this.currentUser = this.userServices.getCurrentUser();
					this.title = this.currentVideo.title;
					this.description = this.currentVideo.description;
					this.videoId = this.currentVideo.videoId;
				},
				error:(err)=>{
					console.log(err);
				},
			})
	}
	
	async editCurrentVideo() {
		if(this.title==='' || this.description==='' || this.selectedOption===''){
			this.message = 'Incomplete fields'
			return;
		}
		try{
			this.videoServices.editVideo(this.videoId, this.title, this.description, this.selectedOption).then(()=>this.navigateToHome())
			
		}
		catch(err){
			console.log(err)
		}
	
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

