import { Component, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() comment: Comment;
  constructor() { }

  ngOnInit(): void {
  }

}
