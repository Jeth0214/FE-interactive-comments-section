import { Injectable } from '@angular/core';
import { CommentsStorageService } from './comments-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor( private storage: CommentsStorageService ) { }

  getComments() {
    return this.storage.getComments();
  }

  getUser() {
    return this.storage.getUser();
  }
}
