import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { Comment } from '../models/comment';
import { User } from '../models/user';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss']
})
export class CommentsSectionComponent implements OnInit {

  comments: Comment[];
  user: User;
  constructor( private commentService: CommentsService ) { }

  ngOnInit(): void {
    this.comments = this.commentService.getComments();
    this.user = this.commentService.getUser();
  }

}
