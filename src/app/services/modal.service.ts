import { Injectable } from '@angular/core';
import { DomService } from './dom.service';

/**
 * Created based on:
 * https://itnext.io/angular-create-your-own-modal-boxes-20bb663084a1
 */
@Injectable()
export class ModalService {

  constructor(private domService: DomService) { }

  private modalElementId = 'modal-container';
  private overlayElementId = 'overlay';

  init(component: any, inputs: object, outputs: object) {
    const componentConfig = {
      inputs: inputs,
      outputs: outputs,
    };
    const onClose = this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    document.getElementById(this.modalElementId).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';
    return onClose;
  }

  destroy(result?: boolean) {
    this.domService.removeAllComponents(result);
    this.hideOverlay();
  }

  back(result?: boolean) {
    this.domService.removeComponent(result);
    if (!this.domService.hasComponents()) {
      this.hideOverlay();
    }
  }

  private hideOverlay() {
    document.getElementById(this.modalElementId).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';
  }
}
