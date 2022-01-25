import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/models/video/video';
import { VideoService } from 'src/app/services/videoContent/video.service';
import { UserService } from 'src/app/services/auth/user.service';
import { User } from 'src/app/models/user/user';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-video',
	templateUrl: './add-video.component.html',
	styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
	categories = [
		{ id: 'INFORMATION', title: 'INFORMATION' },
		{ id: 'MUSIC', title: 'MUSIC' },
		{ id: 'COMEDY', title: 'COMEDY' },
		{ id: 'TECHNOLOGY', title: 'TECHNOLOGY' },
		{ id :'SPORTS', title:'SPORTS'},
		{ id:'OTHERS', title:'OTHERS'}
	]
	currentUser:User = {id:-1, name:'', email:'', dob:'', password:''}
	title = '';
	description = '';
	videoId = '';
	selectedOption = '-'
	constructor(private route:Router,private videoServices:VideoService, private userServices :UserService) { }

	ngOnInit(): void {
		this.currentUser = this.userServices.getCurrentUser();
	}
	addNewVideo() {
		const size = this.videoServices.getAllVideosSize();
		const videoLink = this.videoServices.getEmbedLink(this.videoId);
		const imageLink = this.videoServices.getThumbnail(this.videoId);
		const newVideoObj = new Video(this.currentUser.id, this.selectedOption, this.title, this.description, this.videoId, videoLink, imageLink);
		this.videoServices.addVideo(newVideoObj)
		this.route.navigateByUrl('/')
	}

}
