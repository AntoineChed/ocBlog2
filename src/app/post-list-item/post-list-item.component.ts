import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private postsService: PostsService
    ) { }

  ngOnInit() {
  }

  onUpdateLoveIts(n: number) {
    return this.postsService.incrementeLoveIts(this.post, n);
  }

  onDeletePost(){
    if( confirm('Etes-vous sûr de vouloir supprimer ce post ?') === true){
      this.postsService.removePost(this.post);
    }
  }
}
