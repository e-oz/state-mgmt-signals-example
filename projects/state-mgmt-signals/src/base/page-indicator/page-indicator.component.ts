import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'page-indicator',
  standalone: true,
  template: `Page: {{page+1}}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageIndicatorComponent {
  @Input({ required: true }) page!: number;
}
