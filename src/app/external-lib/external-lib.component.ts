import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@Component({
  selector: 'app-external-lib',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
 template: `
    <github-repo-card owner="stenciljs" repo="core"></github-repo-card>`,
  styleUrl: './external-lib.component.scss'
})
export class ExternalLibComponent {

}
