import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ShipsStore } from "../ships.store";
import { PageIndicatorComponent } from "../../base/page-indicator/page-indicator.component";

@Component({
  selector: 'ships-page-indicator',
  standalone: true,
  imports: [PageIndicatorComponent],
  templateUrl: './ships-page-indicator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipsPageIndicatorComponent {
  protected readonly store = inject(ShipsStore, { skipSelf: true });
}
