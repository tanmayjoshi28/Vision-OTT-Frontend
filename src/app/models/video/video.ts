export class Video {
    ownerId:number
    category:string
    title:string
    description:string
    videoId:string
    embedLink:string
    imageLink:string
    constructor(ownerId:number,category:string,title:string, description:string,videoId:string,embedLink:string, imageLink:string){
        this.ownerId = ownerId,
        this.title = title,
        this.description = description,
        this.videoId = videoId,
        this.embedLink = embedLink,
        this.imageLink = imageLink,
        this.category = category
    }
}
