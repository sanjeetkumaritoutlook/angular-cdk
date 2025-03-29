import { Component , ElementRef, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-tooltip',
  imports: [],
  template: `
  <button (mouseenter)="openTooltip()" (mouseleave)="closeTooltip()">Hover me</button>
  <ng-template #tooltipTemplate>
    <div class="tooltip">I am a CDK Tooltip!</div>
  </ng-template>
`,
styles: [`
  .tooltip {
    background: black;
    color: white;
    padding: 8px;
    border-radius: 4px;
  }
`]
})
export class TooltipComponent {
  @ViewChild('tooltipTemplate') tooltipTemplate!: TemplateRef<any>;
  overlayRef!: OverlayRef;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}

  openTooltip() {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(document.querySelector('button')!)
      .withPositions([{ originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom' }]);

    this.overlayRef = this.overlay.create({ positionStrategy });

    this.overlayRef.attach(new TemplatePortal(this.tooltipTemplate, this.viewContainerRef));
  }

  closeTooltip() {
    this.overlayRef.detach();
  }
}
