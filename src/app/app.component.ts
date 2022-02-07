import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from './services/videoContent/video.service';
import { UserService } from './services/auth/user.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private videoServices:VideoService, private route:Router, private userServices:UserService) {}
	async ngOnInit() {
		await this.videoServices.getAllVideos();
		if(this.userServices.currentUser.id===-1){
			this.route.navigateByUrl('/login');
		}
		else{
			this.route.navigateByUrl('/')
		}
		
	}
}
