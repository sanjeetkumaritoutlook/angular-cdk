import { Routes } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
export const routes: Routes = [
    { path: 'tooltip', component: TooltipComponent },
    { path: 'drag-drop', component: DragDropComponent },
    { path: 'virtual-scroll', component: VirtualScrollComponent }
];
