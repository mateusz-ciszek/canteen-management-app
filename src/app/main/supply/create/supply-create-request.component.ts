import { Component } from '@angular/core';
import { SupplyService } from '../../../services/supply.service';
import { AlertsService } from '../../../services/alerts.service';
import { Router } from '@angular/router';
import { noop } from 'rxjs';

@Component({
  selector: 'app-supply-create-request',
  templateUrl: './supply-create-request.component.html',
  styleUrls: ['./supply-create-request.component.less']
})
export class SupplyCreateRequestComponent {

  readonly URL_PATTERN: string = '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$';

  name: string = '';
  price: number;
  description: string = '';
  url: string = '';

  constructor(
    private supplyService: SupplyService,
    private alertService: AlertsService,
    private router: Router) {}

  save() {
    this.supplyService.createSupply(this.name, this.price, this.url, this.description).subscribe(() => {
      this.alertService.addAlert(`A supply request for "${this.name}" has been created`, 'SUCCESS');
      this.router.navigateByUrl('/main/supply/list').then(noop);
    },
      () => this.alertService.addAlert('Error creating supply request. Please try again later', 'FAILURE'));
  }

  discard() {
    // TODO: Add confirmation modal
    this.router.navigateByUrl('/main/supply/list').then(noop);
  }

}


