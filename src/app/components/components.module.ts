import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { VoteButtonComponent } from './vote-button/vote-button.component';



@NgModule({
  declarations: [
    CardComponent,
    VoteButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    VoteButtonComponent
  ]
})
export class ComponentsModule { }
