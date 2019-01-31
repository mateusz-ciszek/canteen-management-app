import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderState } from '../../../../../../models';

@Component({
  selector: 'app-order-history-selector',
  templateUrl: './order-history-selector.component.html',
  styleUrls: ['./order-history-selector.component.less']
})
export class OrderHistorySelectorComponent implements OnInit {

  @Input()
  history: OrderState[];

  readonly array: Readonly<any[]> = new Array(6);
  selectedState: number;

  @Output()
  selectionChanged: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    this.selectedState = this.history.length - 1;
  }

  isSelected(index: number): boolean {
    return this.selectedState === index;
  }

  isRejected(index: number): boolean {
    return this.history[index] && this.history[index].state === 'REJECTED';
  }

  changeSelection(index: number): void {
    if (this.history[index]) {
      this.selectedState = index;
      this.selectionChanged.emit(index);
    }
  }
}
