import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'page-indicator',
  standalone: true,
  template: `Page: {{page}}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageIndicatorComponent {
  @Input({ required: true }) page!: number;
}
