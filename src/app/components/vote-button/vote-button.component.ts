import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent implements OnInit {
  @Input() vote: any;
  @Input()currentUser : User;
  @Output() voted = new EventEmitter< number > ();
  addVote: number;
  minusVote: number;
   voter: any;
  voterIndex: number;


  constructor() { }

  ngOnInit(): void {
    this.addVote = this.vote.score + 1;
    this.minusVote = this.vote.score - 1;
    
  }
  

  voteUp() {
     if(this.vote.score === this.addVote) {
      return;
    }
    this.findVoter(this.currentUser.username);
    if(!this.voter ) {
      this.countVote('up');
      this.vote.voters.push(this.voter)
    } else {
      if(this.voter.up) {
        return;
      } 
      this.countVote('up');
      this.vote.voters[this.voterIndex] = this.voter
    }
    this.voted.emit(this.vote)
  }

   voteDown() {
     if(this.vote.score === this.minusVote) {
       return;
     }
      this.findVoter(this.currentUser.username);
      if(!this.voter ) {
          this.countVote('down');
        this.vote.voters.push(this.voter)
      } else {
        // console.log(this.voter)
        if(this.voter.down) {
          return;
        } 
        this.countVote('down');
        this.vote.voters[this.voterIndex] = this.voter
      }
      this.voted.emit(this.vote)
    }


  private countVote(vote) {
    if(vote === 'up') {
        this.vote.score++;
        this.voter = {
          name: this.currentUser.username,
          up: true,
          down: false
      }
    } else {
      this.vote.score--;
       this.voter = {
          name: this.currentUser.username,
          up: false,
          down: true
      }
    }  
  }


  private findVoter(name) {
    this.voterIndex = this.vote.voters.findIndex( voter =>  {return voter.name == name});
    this.voter = this.vote.voters[this.voterIndex];
  }

}
