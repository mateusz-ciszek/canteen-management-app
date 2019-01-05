export class Selector<T> {

  private selection: SelectionModel<T>[];

  constructor(content: T[]) {
    this.setItems(content);
  }

  setItems(items: T[]): void {
    this.selection = items.map(item => ({ item, isSelected: false }));
    items.push = (...newItems: T[]) => {
      const newLength: number = Array.prototype.push.apply(items, newItems);
      if (this.selection) {
        newItems.forEach(item => this.selection.push({ item, isSelected: false }));
      }
      return newLength;
    };
  }

  getItem(index: number): SelectionModel<T> {
    if (this.selection[index].isSelected === undefined) {
      this.selection[index].isSelected = false;
    }
    return this.selection[index];
  }

  isSelectedAll(): boolean {
    return this.getSelected().length === this.selection.length;
  }

  isSelectedAny(): boolean {
    return this.getSelected().length !== 0;
  }

  isSelectedOne(): boolean {
    return this.getSelected().length === 1;
  }

  isSelectedMany(): boolean {
    return this.getSelected().length > 1;
  }

  onChangeAll(event: Event, state?: boolean): void {
    if (state === undefined || state === null) {
      state = event.currentTarget['checked'];
    }
    this.selection.forEach(item => item.isSelected = state);
  }

  getTotalCount(): number {
    return this.selection.length;
  }

  getSelectedCount(): number {
    return this.getSelected().length;
  }

  getSelectedItems(): T[] {
    return this.getSelected().map(item => item.item);
  }

  private getSelected(): SelectionModel<T>[] {
    return this.selection.filter(item => item.isSelected === true);
  }
}

class SelectionModel<T> {
  item: T;
  isSelected: boolean;
}
