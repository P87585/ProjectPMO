import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'az-components',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './components.component.html'
})
export class ComponentsComponent {
    ngOnInit(): void {
        jQuery('[data-toggle="tooltip"]').tooltip();
        jQuery('[data-toggle="popover"]').popover();
    }
}
