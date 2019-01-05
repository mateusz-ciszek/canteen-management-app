import { Injectable } from '@angular/core';
import { DomService } from './dom.service';
import { Observable, Subject } from 'rxjs';

/**
 * Created based on:
 * https://itnext.io/angular-create-your-own-modal-boxes-20bb663084a1
 */
@Injectable()
export class ModalService {

  constructor(private domService: DomService) { }

  private modalElementId = 'modal-container';
  private overlayElementId = 'overlay';

  private subject: Subject<boolean> = new Subject();

  init(component: any, inputs: object, outputs: object) {
    const componentConfig = {
      inputs: inputs,
      outputs: outputs,
    };
    this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';
  }

  destroy(result?: boolean) {
    this.domService.removeComponent();
    document.getElementById(this.modalElementId).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';
    this.subject.next(result || false);
    this.subject.complete();
    this.subject = new Subject();
  }

  public onClose(): Observable<boolean> {
    return this.subject;
  }
}
