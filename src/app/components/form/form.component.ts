import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() currentUser: User;
  @Output() add = new EventEmitter< Comment >();
  comment: string;

  constructor() { }

  ngOnInit(): void {
  }

  addComment() {
    if(this.comment === "" || this.comment == undefined) {
      return;
    }
    let newComment: Comment = {
      id: 0,
      content: this.comment.trim(),
      createdAt: new Date().toString(),
      score: 0,
      replies: [],
      user: this.currentUser
    }
    //console.log(newComment);
    this.add.emit(newComment);
    this.comment = "";
  }


}
