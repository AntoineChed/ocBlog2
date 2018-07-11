import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import { DataSnapshot } from 'firebase/database';

export class PostsService {

  posts: Post[] = [];
	postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts(){
  	this.postsSubject.next(this.posts);
  }

  getPosts(){
    firebase.database().ref('/posts')
        .on('value', (data: DataSnapshot) => {
            this.posts = data.val() ? data.val() : [];
            this.emitPosts();
          }
        );
  }

  savePosts(){
    firebase.database().ref('/posts').set(this.posts);
  }

  createNewPost(newPost: Post) {
	  this.posts.push(newPost);
	  this.savePosts();
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
		this.savePosts();
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
  	this.savePosts();
    this.emitPosts();

  	return this.posts[indexOfPost].loveIts;
	}
}