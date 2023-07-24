import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ListProgressComponent } from "../../base/list-progress/list-progress.component";
import { ShipsStore } from "../ships.store";

@Component({
  selector: 'ships-list-progress',
  standalone: true,
  imports: [ListProgressComponent],
  templateUrl: './ships-list-progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipsListProgressComponent {
  protected readonly store = inject(ShipsStore, { skipSelf: true });
}
