import { Component, Input } from '@angular/core';
import { SupplyStateEnum } from '../../../../models';

@Component({
  selector: 'app-supply-state-badge',
  templateUrl: './supply-state-badge.component.html',
  styleUrls: ['./supply-state-badge.component.less'],
})
export class SupplyStateBadgeComponent {

  @Input()
  state: SupplyStateEnum;

  private stateToBadgeMap: Map<SupplyStateEnum, string> = new Map<SupplyStateEnum, string>([
    ['NEW' as SupplyStateEnum, 'badge-secondary'],
    ['ACCEPTED' as SupplyStateEnum, 'badge-primary'],
    ['REJECTED' as SupplyStateEnum, 'badge-danger'],
    ['CANCELLED' as SupplyStateEnum, 'badge-danger'],
    ['PENDING' as SupplyStateEnum, 'badge-light'],
    ['READY' as SupplyStateEnum, 'badge-warning'],
    ['DELIVERED' as SupplyStateEnum, 'badge-success'],
  ]);

  resolveBadge(state: SupplyStateEnum): string {
    return this.stateToBadgeMap.get(state);
  }
}
