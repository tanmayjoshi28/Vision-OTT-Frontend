import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';
import dummyUsers
 from 'src/dummydata/dummyUsers';
import { Video } from 'src/app/models/video/video';
import { VideoService } from '../videoContent/video.service';
@Injectable({
	providedIn: 'root'
})
export class UserService {
	userData: User[] = dummyUsers;
	currentUser:User = {id:-1, name:'', email:'', dob:'', bookmarks:[],password:''}
	constructor(private videoServices:VideoService) { }
	setUsers(input: User) {
		this.userData.push(input)
	}
	getUsers(): User[] {
		return this.userData;
	}
	totalUsers(): number {
		return this.userData.length;
	}
	authenticate(email: string, password: string): boolean {
		for(var i=0; i<this.userData.length; i++){
			if(email==this.userData[i].email && password==this.userData[i].password){
				this.currentUser = this.userData[i];
				return true;
			}
		}
		return false;
	}
	getCurrentUser():User{
		return this.currentUser
	}
	getUserById(id:string):User{
		for(let user of this.userData){
			if(user.id===parseInt(id)){
				return user
			}
		}
		throw(Error);
	}
	bookMarkVideo(videoId:string){
		this.currentUser.bookmarks.push(videoId);
	}
	unMarkVideo(videoId:string){
		this.currentUser.bookmarks = this.currentUser.bookmarks.filter(id=> id!=videoId)
	}
	getBookMarkedVideos():Video[]{
		const videos:Video[]=[];
		for(let id of this.currentUser.bookmarks){
			let currentVideo = this.videoServices.getVideoById(id);
			videos.push(currentVideo);
		}
		return videos;
	}
	checkDuplicate(email:string):boolean{
		for(let user of this.userData){
			console.log(user.email)
			if(user.email===email){
				return true;
			}
		}
		return false;
	}
}
