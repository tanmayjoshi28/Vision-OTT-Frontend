import { Injectable } from '@angular/core';
import { Video } from '../../models/video/video';
import dummyVideos from '../../../dummydata/dummyVideos';

@Injectable({
	providedIn: 'root'
})
export class VideoService {
	EMBED_BASE_URL = 'https://www.youtube.com/embed/';
	IMAGE_BASE_URL = 'https://img.youtube.com/vi/'
	allVideos: Video[] = dummyVideos;
	constructor() { }

	getAllVideosSize():number{
		return this.allVideos.length;
	}
	getEmbedLink(videoId:string):string{
		return this.EMBED_BASE_URL + videoId
	}
	getThumbnail(videoId:string):string{
		return this.IMAGE_BASE_URL + videoId + '/0.jpg'
	}
	getAllVideos(): Video[] {
		return this.allVideos
	}
	addVideo(newVideo:Video){
		this.allVideos.push(newVideo)
	}
}
