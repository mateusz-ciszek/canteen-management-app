import { Component, Input } from '@angular/core';
import { Comment } from '../../../models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less'],
})
export class CommentComponent {

  @Input()
  comment: Comment;

}
