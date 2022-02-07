import { Injectable } from '@angular/core';
import { Video } from '../../models/video/video';
import { HttpClient } from '@angular/common/http'; 

import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class VideoService {
	EMBED_BASE_URL = 'https://www.youtube.com/embed/';
	IMAGE_BASE_URL = 'https://img.youtube.com/vi/'
	
	allVideos: Video[] = [];
	constructor(private http:HttpClient) { }

	async getAllVideos(){
		(await this.http.get<Video[]>('http://localhost:3000/videoContent/'))
			.subscribe({
				next:(data)=>{
					this.allVideos = data;
				},
				error:(err)=>{
					console.log(err);
				},
				complete:()=>{
					console.log('GET METHOD COMPLETED')
				}
			})
	}
	
	async addVideo(newVideo:Video):Promise<Observable<any>>{
		return await this.http.post(
			'http://localhost:3000/videoContent/',
			{
				"ownerId": newVideo.ownerId,
				"category": newVideo.category,
				"title": newVideo.title,
				"description": newVideo.description,
				"videoId": newVideo.videoId
			},
		)
	}

	getYourVideos(userId:string){
		return(
			this.allVideos.filter(video=> video.ownerId===parseInt(userId))
		)
	}

	async getVideoById(videoId:string):Promise<Observable<Video>>{
		return await this.http.get<Video>(`http://localhost:3000/videoContent/${videoId}`)
	}

	async editVideo(videoId:string, title:string, description:string, category:string){
		(await this.http.patch<Video>(
			`http://localhost:3000/videoContent/${videoId}`,
			{
				"title":title,
				"description":description,
				"category":category,
			}
		)).subscribe({
			next:(updatedVideo)=>{
				for(let video of this.allVideos){
					if(videoId === video.videoId){
						video.title = updatedVideo.title;
						video.description = updatedVideo.description;
						video.category = updatedVideo.category
					}
				}
			},
			error:(err)=>{
				throw new Error(err);
			}
		})
	}

	async deleteVideo(videoId:string){
		(await this.http.delete(`http://localhost:3000/videoContent/${videoId}`))
			.subscribe({
				next:()=>{
					this.allVideos = this.allVideos.filter(video=> video.videoId!=videoId);
				},
				error:(err)=>{
					throw new Error(err);
				}
			})
	}

	checkVideo(videoId:string):boolean{
		for(let video of this.allVideos){
			if(video.videoId===videoId){
				return true;
			}
		}
		return false;
	}

	getEmbedLink(videoId:string):string{
		return this.EMBED_BASE_URL + videoId
	}
	getThumbnail(videoId:string):string{
		return this.IMAGE_BASE_URL + videoId + '/0.jpg'
	}

}
