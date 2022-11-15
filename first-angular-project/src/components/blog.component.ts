import {Component} from "@angular/core";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent {
   data: any[] = [
     {
       title: 'Blog 1',
       description: 'Description 1'
     },
     {
       title: 'Blog 2',
       description: 'Description 2'
     },
     {
       title: 'Blog 3',
       description: 'Description 3'
     },
     {
       title: 'Blog 4',
       description: 'Description 5'
     }
   ]
}
