import { Injectable } from '@angular/core';
import * as commentsData from '../assets/json/data.json';
import { Comment } from './models/comment';
import { User } from './models/user';

const commentsStorageName = "comments";
const userStorageName = "user";

@Injectable({
  providedIn: 'root'
})
export class CommentsStorageService {

  private comments: Comment[];
  private user: User;

  constructor() {
    this.comments = JSON.parse(localStorage.getItem(commentsStorageName)) || commentsData.comments;
    this.user = JSON.parse(localStorage.getItem(userStorageName)) || commentsData.currentUser;
    console.log('comments storage', this.comments)
    console.log('user storage', this.user)
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
  addComments() {

  }
  // update  comment
  updateComments() {

  }
  // delete comment
  deleteComments() {

  }
  
}
