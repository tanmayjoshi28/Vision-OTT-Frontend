import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';
import dummyUsers
 from 'src/dummydata/dummyUsers';
import { Video } from 'src/app/models/video/video';
import { VideoService } from '../videoContent/video.service';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
	providedIn: 'root'
})
export class UserService {
	userData: User[] = dummyUsers;
	currentUser:User = {id:-1, username:'', email:'', dob:'', bookmarks:[], password:''}
	constructor(private videoServices:VideoService, private http:HttpClient) { }
	setUsers(input: User) {
		this.userData.push(input)
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
	async bookMarkVideo(videoId:string){
		(await this.http.post(`http://localhost:3000/bookmark/add/${this.currentUser.id}/${videoId}`,{}))
			.subscribe({
				next:()=>this.currentUser.bookmarks.push(videoId),
				error:(err)=>console.log(err)
			})
	}
	async unMarkVideo(videoId:string){
		(await this.http.delete(`http://localhost:3000/bookmark/${this.currentUser.id}/${videoId}`,{}))
			.subscribe({
				next:()=>this.currentUser.bookmarks = this.currentUser.bookmarks.filter(id=> id!=videoId),
				error:(err)=>console.log(err)
			})
		
	}

	async getBookMarks(){
		(await this.http.get<Video[]>(`http://localhost:3000/bookmark/${this.currentUser.id}`))
			.subscribe({
				next:(data)=>{
					for(let video of data){
						this.currentUser.bookmarks.push(video.videoId)
					}
				},
				error:(err)=>{
					console.log(err);
				}
			})
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
