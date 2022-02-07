import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlTransform'
})
export class UrlTransformPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  
  transform(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
