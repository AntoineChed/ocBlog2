import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';

export class PostsService {

	posts: Post[] = [
      new Post({
        'title' : 'Mon premier post',
        'content' : 'Lorem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ip' +
        'sum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum',
      }),
      new Post({
        'title' : 'Mon deuxième post',
        'content' : 'Lorem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ip' +
        'sum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum',
      }),
      new Post({
        'title' : 'Mon troisième post',
        'content' : 'Lorem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ip' +
        'sum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum',
      }),
        new Post({
        'title' : 'Mon quatrième post',
        'content' : 'Lorem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ip' +
        'sum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum orem ipsum Lorem ipsum Lorem ipsum',
      })
    ];

	postsSubject = new Subject<Post[]>();

  	constructor() { }

  	emitPosts(){
  		this.postsSubject.next(this.posts);
  	}

  	getPosts(){
  		return this.posts;
  	}

  	createNewPost(newPost: Post) {
	    this.posts.push(newPost);
	    this.emitPosts();
	}

	removePost(post: Post) {
		const postIndexToRemove = this.posts.findIndex(
		  (postEl) => {
		    if(postEl === post) {
		      return true;
		    }
		  }
		);
		this.posts.splice(postIndexToRemove, 1);
		this.emitPosts();
	}

	incrementeLoveIts(post: Post, n: number) {
    	const indexOfPost = this.posts.findIndex(
		  (postEl) => {
		    if(postEl === post) {
		      return true;
		    }
		  }
		);

    	this.posts[indexOfPost].loveIts += n;
    	this.posts[indexOfPost].loveIts = (this.posts[indexOfPost].loveIts < 0) ? 0 : this.posts[indexOfPost].loveIts
    	this.emitPosts();

    	return this.posts[indexOfPost].loveIts;
  	}
}