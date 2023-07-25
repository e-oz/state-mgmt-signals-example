import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageIndicatorComponent } from "../../base/page-indicator/page-indicator.component";
import { PlanesStore } from "../planes.store";

@Component({
  selector: 'planes-page-indicator',
  standalone: true,
  imports: [PageIndicatorComponent],
  templateUrl: './planes-page-indicator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanesPageIndicatorComponent {
  protected readonly store = inject(PlanesStore, { skipSelf: true });
}
