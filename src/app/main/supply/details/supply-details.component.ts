import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SupplyDetailsResponse } from '../../../models';

@Component({
  selector: 'app-supply-details',
  templateUrl: './supply-details.component.html',
  styleUrls: ['./supply-details.component.less'],
})
export class SupplyDetailsComponent {

  model: SupplyDetailsResponse;

  constructor(private route: ActivatedRoute) {
    this.model = this.route.snapshot.data['supply'];
    console.log(this.model);
  }

  saveComment(content: string): void {
  }
}
