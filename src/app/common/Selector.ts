export class Selector<T> {

  private selection: SelectionModel<T>[];

  constructor(content: T[]) {
    this.setItems(content);
  }

  setItems(items: T[]): void {
    this.selection = items.map(item => ({ item, isSelected: false }));
  }

  getItems(): SelectionModel<T>[] {
    return this.selection;
  }

  getItem(index: number): SelectionModel<T> {
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

  onChangeAll(state: boolean): void {
    this.selection.forEach(item => item.isSelected = state);
  }

  private getSelected(): SelectionModel<T>[] {
    return this.selection.filter(item => item.isSelected === true);
  }

  getSelectedItems(): T[] {
    return this.getSelected().map(item => item.item);
  }
}

export class SelectionModel<T> {
  item: T;
  isSelected: boolean;
}
