import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {BlogPost} from "../../blog-post";

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class BlogPostTileComponent implements OnInit {
  @Input() post: BlogPost = new BlogPost("","");
  // title: string = '';
  // summary: string = '';
  // @Input('summary') description: string = '';

  // blogPost: BlogPost[] = [];
  constructor() { }

  ngOnInit(): void {
    // this.title = "Blog title";
    // this.summary = "Blog Summary";
    // this.title = this.post["title"];
    // this.summary = this.post["summary"];
  }

  markFav(){
    this.post.isFav = !this.post.isFav;
  }

}
