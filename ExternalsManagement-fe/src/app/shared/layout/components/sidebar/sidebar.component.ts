import { Component, ElementRef } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [MenuComponent],
    templateUrl: 'sidebar.component.html'
})
export class SidebarComponent {
    constructor(public el: ElementRef) {}
}
