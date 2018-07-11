import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {PostsService} from '../services/posts.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  
  posts: Post[];
  postsSubscription: Subscription;

  constructor(
  	private postsService: PostsService
  	) { }

  ngOnInit() {
  	this.postsSubscription = this.postsService.postsSubject.subscribe(
  		(posts: Post[]) => {
  			this.posts = posts;
  		}

  	);
  	this.postsService.emitPosts();

    this.postsService.getPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
