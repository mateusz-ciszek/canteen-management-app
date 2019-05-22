import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-change-name-modal',
  templateUrl: './change-name-modal.component.html',
  styleUrls: ['./change-name-modal.component.less']
})
export class ChangeNameModalComponent {

  @Input()
  title: string = 'Change name';

  @Input()
  inputPlaceholder: string = '';

  name: string = '';

  @Output()
  nameChange: EventEmitter<string> = new EventEmitter();

  constructor(private modalService: ModalService) {}

  close(): void {
    this.modalService.destroy();
  }

  change(): void {
    this.nameChange.emit(this.name);
  }
}

export interface ChangeNameInput {
  title?: string;
  inputPlaceholder?: string;
}

export interface ChangeNameOutput {
  nameChange: EventEmitter<string>;
}
