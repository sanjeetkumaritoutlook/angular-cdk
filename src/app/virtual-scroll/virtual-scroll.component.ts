import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-virtual-scroll',
  imports: [ScrollingModule,CommonModule],
  templateUrl: './virtual-scroll.component.html',
  styles: [
    `
      .viewport {
        height: 400px; /* Required for virtual scrolling */
        width: 300px;
        border: 1px solid black;
        overflow: auto;
      }
      .item {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #ddd;
      }
    `,
     ],
})
export class VirtualScrollComponent {
  items = Array.from({ length: 10000 }, (_, i) => `Item #${i}`);
}
