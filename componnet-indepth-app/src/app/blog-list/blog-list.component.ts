import {ChangeDetectionStrategy, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {BlogPost} from "../../blog-post";
import {BlogPostTileComponent} from "../blog-post-tile/blog-post-tile.component";
import {BlogDataService} from "../blog-data.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[][] = [[]];
  currentPage : number = 0;
  // @ViewChild('posts') blogPostTileComponent: BlogPostTileComponent|null = null; // For single element
  @ViewChildren('posts') blogPostTileComponent: QueryList<BlogPostTileComponent>|null = null; // For Multiple elements in the loop
  constructor( private blogDataService: BlogDataService) { }

  ngOnInit(): void {
    // this.title = "Blog title";
    // this.summary = "Blog Summary";
    this.blogPost = this.blogDataService.getData();
    this.currentPage = 0;

    // let post2 = this.blogPost.push(new BlogPost('Blog Post 2', 'Summary 2'));
  }

  updatePage(newPage: number) {
    console.log(newPage)
    this.currentPage = newPage
  }
  onExpandAll(){
    //THis way you can call method of the child component from the parent and also called its methods.
    // this.blogPostTileComponent.showFullSummary()


    console.log(this.blogPostTileComponent)

  }
  onFavAll(){
    // This is handy when ChangeDetection Strategy becomes Default in the above @component metadata
    // this.blogPost[this.currentPage].forEach((blogpost) => {
    //   blogpost.isFav = true;
    // })

    // This is handy when ChangeDetection Strategy becomes OnPush in the above @component metadata;
    // Need to return immutable object rather then changing inline
    this.blogPost[this.currentPage] = this.blogPost[this.currentPage].map( ( post ) => ({
        // var test = {
        title: post.title,
        summary: post.summary,
        isFav : true
        // }
        // return test
    }))
  }
}
