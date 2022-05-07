import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { User } from 'src/app/models/user';
import { getAgoTime } from 'src/app/helper/date';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() comment: Comment;
  @Input() currentUser: User;
  @Output() update =  new EventEmitter< Comment > ();
  @Output() delete =  new EventEmitter< number > ();

  commentToUpdate: string = ""; 
  onEditMode = false;
  createdAt: string
  constructor() { }

  ngOnInit(): void {
    this.commentToUpdate = this.comment.content;
    this.createdAt = getAgoTime(this.comment.createdAt)
    setInterval( () => { this.createdAt = getAgoTime(this.comment.createdAt)}, 60000);

  }


  onDelete(id: number) {
    // console.log('delete comment number' , id);
    this.delete.emit(id);
  }

  onEdit() {
    this.onEditMode = !this.onEditMode;
  }

  onCancel() {
    this.commentToUpdate = this.comment.content;
    this.onEditMode = false;
  }


  updateComment(comment :Comment) {

    if(this.commentToUpdate == "" || this.commentToUpdate == undefined ) {
      return;
    }

    comment.content = this.commentToUpdate.trim();
    this.update.emit(comment);
    this.onEditMode = false;
  }

   ngOnDestroy() {
    clearInterval();
  }

}
