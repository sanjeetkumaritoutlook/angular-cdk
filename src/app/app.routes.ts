import { Routes } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
export const routes: Routes = [
    { path: 'tooltip', component: TooltipComponent },
    { path: 'drag-drop', component: DragDropComponent }
];
