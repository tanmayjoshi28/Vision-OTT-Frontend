import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/models/video/video';
import { VideoService } from 'src/app/services/videoContent/video.service';

@Component({
	selector: 'app-watch-video',
	templateUrl: './watch-video.component.html',
	styleUrls: ['./watch-video.component.css']
})
export class WatchVideoComponent implements OnInit {
	safeUrl: SafeResourceUrl = ''
	currentVideo: Video = {
		ownerId: -1,
		category: '',
		title: '',
		description: '',
		videoId: '',
		embedLink: '',
		imageLink: '',
	}

	constructor(
		private route: Router,
		private activeRoute: ActivatedRoute,
		private videoServices: VideoService,
		private _sanitizer: DomSanitizer
	) { }

	ngOnInit(): void {
		const videoId = this.activeRoute.snapshot.paramMap.get('videoId');
		this.currentVideo = this.videoServices.getVideoById(!videoId ? '' : videoId);
		this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.currentVideo.embedLink);
	}

}
