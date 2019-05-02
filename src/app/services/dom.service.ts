import { Injectable, Injector, ComponentFactoryResolver, EmbeddedViewRef, ApplicationRef, ComponentRef, Type } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Created based on:
 * https://itnext.io/angular-create-your-own-modal-boxes-20bb663084a1
 */
@Injectable()
export class DomService {

  private componentBundleHistory: ComponentBundle[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  public appendComponentTo(parentId: string, child: Type<any>, childConfig?: ChildConfig): Subject<boolean> {
    // Create a component reference from the component
    const childComponentRef: ComponentRef<any> = this.componentFactoryResolver
      .resolveComponentFactory(child)
      .create(this.injector);

    const bundle: ComponentBundle = {
      component: childComponentRef,
      _onClose: new Subject(),
      parentId,
    };

    // Attach the config to the child (inputs and outputs)
    this.attachConfig(childConfig, childComponentRef);

    if (this.hasComponents()) {
      const prevBundle = this.componentBundleHistory[this.componentBundleHistory.length - 1];
      this.appRef.detachView(prevBundle.component.hostView);
    }

    this.componentBundleHistory.push(bundle);
    this.showComponent(bundle);
    return bundle._onClose;
  }

  public removeComponent(result?: boolean): void {
    const bundle = this.componentBundleHistory.pop();
    this.appRef.detachView(bundle.component.hostView);
    bundle.component.destroy();
    bundle._onClose.next(!!result);
    bundle._onClose.complete();

    if (this.hasComponents()) {
      const prevBundle = this.componentBundleHistory[this.componentBundleHistory.length - 1];
      this.showComponent(prevBundle);
    }
  }

  public removeAllComponents(result?: boolean): void {
    this.removeComponent(result);

    this.componentBundleHistory.forEach(bundle => {
      bundle.component.destroy();
      bundle._onClose.next(false);
      bundle._onClose.complete();
    });

    this.componentBundleHistory = [];
  }

  hasComponents(): boolean {
    return !!this.componentBundleHistory.length;
  }

  private showComponent(bundle: ComponentBundle): void {
    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(bundle.component.hostView);

    // Get DOM element from component
    const childDomElem = (bundle.component.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    // Append DOM element to the body
    document.getElementById(bundle.parentId).appendChild(childDomElem);
  }

  private attachConfig(config: ChildConfig, componentRef: ComponentRef<any>): void {
    const inputs = config.inputs;
    const outputs = config.outputs;
    for (const key in inputs) {
      componentRef.instance[key] = inputs[key];
    }
    for (const key in outputs) {
      componentRef.instance[key] = outputs[key];
    }
  }
}

interface ChildConfig {
  inputs: object;
  outputs: object;
}

interface ComponentBundle {
  component: ComponentRef<any>;
  _onClose: Subject<boolean>;
  parentId: string;
}
