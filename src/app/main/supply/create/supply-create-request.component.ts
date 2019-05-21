import { Component, ViewChild } from '@angular/core';
import { SupplyService } from '../../../services/supply.service';
import { AlertsService } from '../../../services/alerts.service';
import { Router } from '@angular/router';
import { noop } from 'rxjs';
import { ModalService } from '../../../services/modal.service';
import { ConfirmationDataInput, ConfirmationModalComponent } from '../../../common/modal/confirmation/confirmation-modal.component';
import { NgForm } from '@angular/forms';

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

  @ViewChild('createSupplyForm')
  form: NgForm;

  constructor(
      private supplyService: SupplyService,
      private alertService: AlertsService,
      private modalService: ModalService,
      private router: Router) {}

  save(): void {
    this.supplyService.createSupply(this.name, this.price, this.url, this.description).subscribe(() => {
      this.alertService.addAlert(`A supply request for "${this.name}" has been created`, 'SUCCESS');
      this.goToList();
    },
      () => this.alertService.addAlert('Error creating supply request. Please try again later', 'FAILURE'));
  }

  discard(): void {
    if (!this.form.dirty && !this.form.touched) {
      return this.goToList();
    }

    const input: ConfirmationDataInput = {
      title: 'Discard supply request',
      message: 'Are you sure you want to discard this supply request?',
      confirmLabel: 'Discard',
      cancelLabel: 'Keep editing',
    };
    this.modalService.init(ConfirmationModalComponent, input, {}).subscribe(result => {
      if (result) {
        this.goToList();
      }
    });
  }

  private goToList(): void {
    this.router.navigateByUrl('/main/supply/list').then(noop);
  }
}


