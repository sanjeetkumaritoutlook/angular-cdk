import { Routes } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ParentModalComponent } from './parent-modal/parent-modal.component';
import { ExternalLibComponent } from './external-lib/external-lib.component';
export const routes: Routes = [
    { path: 'tooltip', component: TooltipComponent },
    { path: 'drag-drop', component: DragDropComponent },
    { path: 'virtual-scroll', component: VirtualScrollComponent },
    { path: 'parent-modal', component: ParentModalComponent },
    { path: 'external-lib', component: ExternalLibComponent }
];
