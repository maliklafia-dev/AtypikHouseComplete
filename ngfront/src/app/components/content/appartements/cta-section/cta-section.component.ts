import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.css']
})
export class CtaSectionComponent {
  @Input() heading!: string;
  @Input() description!: string;
  @Input() primaryAction!: string;
  @Input() secondaryAction!: string;
}
