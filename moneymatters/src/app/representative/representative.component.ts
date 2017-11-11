import { Component, Input }  from '@angular/core';

@Component({
  templateUrl: './representative.component.html',
})
export class RepresentativeComponent {
  @Input() data: any;
}
