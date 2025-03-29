import { Component } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';
import { ComponentRef } from '@angular/core';

@Component({
  selector: 'app-parent-modal',
  imports: [],
  template: `<button mat-raised-button (click)="openModal()">Open Modal</button>`,
  styleUrl: './parent-modal.component.scss'
})
export class ParentModalComponent {
  private overlayRef!: OverlayRef;

  constructor(private overlay: Overlay) {}

  openModal() {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });

    // this.overlayRef.attach(new ComponentPortal(CustomModalComponent));
    // this.overlayRef.backdropClick().subscribe(() => this.overlayRef.dispose());
    const modalPortal = new ComponentPortal(CustomModalComponent);
    const modalRef: ComponentRef<CustomModalComponent> = this.overlayRef.attach(modalPortal);
    
    // Pass overlayRef manually to the modal component
    modalRef.instance['overlayRef'] = this.overlayRef;

    this.overlayRef.backdropClick().subscribe(() => this.overlayRef.dispose());
  }
}
