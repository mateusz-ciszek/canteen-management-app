import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplyDetailsResponse } from '../../../models';
import { SupplyService } from '../../../services/supply.service';
import { AlertsService } from '../../../services/alerts.service';
import { CommentsSectionComponent } from '../../../common/comments-section/comments-section.component';

@Component({
  selector: 'app-supply-details',
  templateUrl: './supply-details.component.html',
  styleUrls: ['./supply-details.component.less'],
})
export class SupplyDetailsComponent {

  model: SupplyDetailsResponse;

  @ViewChild('comments')
  comments: CommentsSectionComponent;

  constructor(
      private route: ActivatedRoute,
      private alertService: AlertsService,
      private supplyService: SupplyService) {

    this.model = this.route.snapshot.data['supply'];
  }

  saveComment(content: string): void {
    this.supplyService.addComment(this.model.id, content).subscribe(() => {
      this.alertService.addAlert('Your comment has been posted', 'SUCCESS');
      this.refreshData();
      this.comments.clear();
    },
      () => this.alertService.addAlert('Error posting your comment. Please try again later', 'FAILURE'),
    );
  }

  private refreshData(): void {
    this.supplyService.getSupplyDetails(this.model.id).subscribe(response => this.model = response);
  }
}
