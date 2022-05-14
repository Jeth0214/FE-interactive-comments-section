import { Injectable } from '@angular/core';
import * as commentsData from '../assets/json/data.json';
import { Comment } from './models/comment';
import { Reply } from './models/reply';
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
  addComment(newComment, id?: number) {
    //console.log(id)
    if (id) {
      let comment = this.findComment(id);
      console.log(comment)
      let index = this.findCommentIndex(comment);
      this.comments[index].replies.push(newComment);
    } else {
      this.comments.push(newComment);
    }

    return this.updateStorage();
  }

  // update  comment
  updateComment(updatedComment: Comment) {
    let index = this.findCommentIndex(updatedComment)
    this.comments[index] = updatedComment;
    return this.updateStorage();
  }

  // delete comment
  deleteComment(newComment) {
    if (newComment.replyingTo) {
      let repliedToThisComment = this.findComment(newComment.comment_id);
      let index = this.findCommentIndex(repliedToThisComment);
      let insertComment = repliedToThisComment.replies.filter(reply => { return reply.id !== newComment.id })
      repliedToThisComment.replies = insertComment;
      this.comments[index] = repliedToThisComment
    } else {
      this.comments = this.comments.filter(comment => { return comment.id !== newComment.id });
      console.log(this.comments)
    }
    return this.updateStorage()
  }

  // update storage after operation
  private updateStorage() {
    localStorage.setItem(commentsStorageName, JSON.stringify(this.comments))
    return this.getComments();
  }

  private findCommentIndex(comment) {
    return this.comments.indexOf(comment);
  }
  private findComment(id) {
    return this.comments.filter(comment => { return comment.id === id })[0];
  }

}
