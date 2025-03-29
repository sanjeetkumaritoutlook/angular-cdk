import { Component ,Inject } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-custom-modal',
  imports: [],
  template: `
    <div class="modal">
      <h2>Custom Modal</h2>
      <p>This modal is built using Angular CDK!</p>
      <button mat-button (click)="close()">Close</button>
    </div>
  `,
  styles: [
    `
      .modal {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      }
    `,
  ],
})
export class CustomModalComponent {
  constructor(private overlayRef: OverlayRef) {}

  close() {
    this.overlayRef.dispose();
  }
}
