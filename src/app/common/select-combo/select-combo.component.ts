import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-combo',
  templateUrl: './select-combo.component.html',
  styleUrls: ['./select-combo.component.less']
})
export class SelectComboComponent<T> implements OnInit {

  @Input()
  items: SelectComboDataModel<T>[];

  @Input()
  label: string = 'Selector';

  buttonLabel: string = 'Select';

  @Output()
  selectionChange: EventEmitter<T[]> = new EventEmitter<T[]>();

  ngOnInit(): void {
    this.updateButtonLabel(this.items.filter(o => o.selected));
  }

  itemClick(item: SelectComboDataModel<T>) {
    item.selected = !item.selected;
    const selectedItems = this.items.filter(o => o.selected);
    this.updateButtonLabel(selectedItems);
    this.selectionChange.emit(selectedItems.map(o => o.item));
  }

  reset() {
    this.items.forEach(item => item.selected = false);
  }

  private updateButtonLabel(items: SelectComboDataModel<T>[]): void {
    switch (items.length) {
      case 0:
        this.buttonLabel = 'Select';
        break;
      case 1:
        this.buttonLabel = items[0].name;
        break;
      case this.items.length:
        this.buttonLabel = 'All';
        break;
      default:
        this.buttonLabel = `Selected: ${items.length}/${this.items.length}`;
        break;
    }
  }
}

export interface SelectComboDataModel<T extends any> {
  name: string;
  item: T;
  selected?: boolean;
}
