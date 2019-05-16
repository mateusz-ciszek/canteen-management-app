import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { SupplyDetailsResponse } from '../../../models';
import { Observable } from 'rxjs';
import { SupplyService } from '../../../services/supply.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SupplyDetailsResolver implements Resolve<SupplyDetailsResponse> {
  constructor(private supplyService: SupplyService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SupplyDetailsResponse> {
    const supplyId = route.params['supplyId'];
    return this.supplyService.getSupplyDetails(supplyId);
  }
}
