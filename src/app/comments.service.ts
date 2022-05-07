import { Injectable } from '@angular/core';
import * as commentsData from '../assets/json/data.json';
import { Comment } from './models/comment';
import { User } from './models/user';

const commentsStorageName = "comments";
const userStorageName = "user";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private comments: Comment[];
  private user: User;

  constructor() {
    this.comments = JSON.parse(localStorage.getItem(commentsStorageName)) || commentsData.comments;
    this.user = JSON.parse(localStorage.getItem(userStorageName)) || commentsData.currentUser;
    console.log('comments storage', this.comments)
  }

  // get user
  getUser() {
    return this.user;
  }

  // get all comments
  getComments() {
    return [...this.comments];
  }
  // add a new comment
  addComment(newComment: Comment) : Comment[] {
    this.comments.push(newComment);
    return this.updateStorage();
  }
  // update  comment
  updateComment(updatedComment: Comment) {
    let index = this.findCommentIndex(updatedComment)
    this.comments[index] = updatedComment;
    return this.updateStorage();
  }
  // delete comment
  deleteComment(id: number) {
    this.comments = this.comments.filter( comment => { return comment.id != id });
    return this.updateStorage()
  }

  // update storage after operation
  private updateStorage() {
    localStorage.setItem(commentsStorageName, JSON.stringify(this.comments))
    return  this.getComments();
  }

  private findCommentIndex(comment) {
    return this.comments.indexOf(comment);
  }
  
}
