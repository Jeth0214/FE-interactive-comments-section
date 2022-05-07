import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { Comment } from '../models/comment';
import { User } from '../models/user';
import { ModalService } from '../components/modal/modal.service';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss']
})
export class CommentsSectionComponent implements OnInit {

  comments: Comment[];
  currentUser: User;
  idToDelete: number;

  constructor( private commentService: CommentsService, private modalService: ModalService ) { }

  ngOnInit(): void {
    this.currentUser = this.commentService.getUser();
    this.getAllComments();
  }

  getAllComments() {
    this.comments = this.commentService.getComments();
  }

  addComment(newComment: Comment) {
    newComment.id = Date.now();
   this.comments = this.commentService.addComment(newComment);
  }
  
  updateComment(comment: Comment) {
     this.commentService.updateComment(comment)
  }

  onDeleteComment(id: number) {
    this.idToDelete = id;
    this.modalService.open('modal-1');
  }

  deleteComment() {
    console.log(this.idToDelete);
    this.comments = this.commentService.deleteComment(this.idToDelete);
    this.onCancel();
  }

  onCancel() {
    this.modalService.close('modal-1');
  }
   
}
