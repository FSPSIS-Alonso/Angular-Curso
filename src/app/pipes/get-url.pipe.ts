import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getUrl',
})
export class GetUrlPipe implements PipeTransform {
  transform(value: number[], subdomain?: string): string[] {
    return value.map((item: number) => {
      return `http://${
        subdomain ? subdomain + '.' : ''
      }getimages.com/id=${item}`;
    });
  }
}

// [1,2,3] | getUrl === ['http://getimages.com/id=1','http://getimages.com/id=2','http://getimages.com/id=3']
// [1,2,3] | getUrl:"test" === ['http://test.getimages.com/id=1','http://test.getimages.com/id=2','http://test.getimages.com/id=3']
