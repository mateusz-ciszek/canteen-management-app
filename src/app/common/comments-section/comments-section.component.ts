import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../models';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.less'],
})
export class CommentsSectionComponent {

  @Input()
  comments: Comment[] = [];

  commentContent: string = '';

  @Output()
  postComment: EventEmitter<string> = new EventEmitter();

  clear(): void {
    this.commentContent = '';
  }

  post(): void {
    this.postComment.emit(this.commentContent);
  }
}
