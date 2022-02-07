import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/models/video/video';
import { User } from '../../models/user/user';
import { UserService } from '../../services/auth/user.service';
import { VideoService } from '../../services/videoContent/video.service';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	currentUserId: string | null = '';
	currentUser: User = { id: -1, username: '', email: '', dob: '', bookmarks: [], password: '' }
	yourVideos: Video[] = [];
	bookMarked: Video[] = [];
	constructor(private route: Router, private activeRoute: ActivatedRoute, private videoServices: VideoService, private userServices: UserService) { }
	ngOnInit(): void {
		this.currentUserId = this.activeRoute.snapshot.paramMap.get('id');
		this.yourVideos = this.videoServices.getYourVideos(!this.currentUserId ? '-1' : this.currentUserId)
		this.currentUser = this.userServices.getUserById(!this.currentUserId ? '-1' : this.currentUserId);
		this.bookMarked = this.userServices.getBookMarkedVideos()
	}
	navigateToHome() {
		this.route.navigateByUrl('/');
	}
	navigateToAddVideo() {
		this.route.navigateByUrl('/add-video')
	}
	navigateToEditVideo(videoId: string) {
		this.route.navigateByUrl(`/edit-video/${videoId}`);
	}
	navigateToWatching(videoId: string) {
		this.route.navigateByUrl(`/watching/${videoId}`)
	}
	deleteVideo(videoId: string) {
		this.videoServices.deleteVideo(videoId)
			.then(()=>{
				this.yourVideos = this.yourVideos.filter(video=>video.videoId!=videoId)
			})
			.catch((err)=>{
				console.log(err);
			})
	}
}
