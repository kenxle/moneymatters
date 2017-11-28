import { Component, Input } from '@angular/core';
import { Node } from '../../../d3';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle
          class="node"
          [attr.fill]="node.color"
          cx="0"
          cy="0"
          [attr.r]="node.r">
      </svg:circle>
      <svg:text
          dy = "-0.5em"
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.r > 15 ? node.first_name : ""}}
      </svg:text>
      <svg:text
          dy = "0.5em"
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.r > 15 ? node.last_name : " "}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
}
