import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  imports: [CommonModule,DragDropModule ],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss'
})
export class DragDropComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];

  drop(event: CdkDragDrop<string[]>) {
    console.log('Drag event:', event); // Debugging
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
