import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../models/video/video';

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {

	transform(videoContent: Video[], searchString: string): Video[] {
		searchString = searchString.toLowerCase();
		if (searchString == '' || searchString == null) {
			return videoContent;
		}
		const newVideoContent:Video[] = [];
		for(let video of videoContent){
			const category = video.category.toLowerCase();
			const title = video.title.toLowerCase();
			const description = video.description.toLowerCase();

			if(category.includes(searchString) || title.includes(searchString) || description.includes(searchString)){
				newVideoContent.push(video);
			}
		}
		if(newVideoContent.length===0){
			alert(`No results found for ${searchString}`)
		}
		return newVideoContent;
	}
}
