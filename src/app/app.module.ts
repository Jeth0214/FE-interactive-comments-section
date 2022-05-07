import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CommentsSectionComponent } from './comments-section/comments-section.component';
import { CommentsService } from './comments.service';



@NgModule({
  declarations: [
    AppComponent,
    CommentsSectionComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [
    CommentsService, 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
