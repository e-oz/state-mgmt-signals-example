import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ItemsListComponent } from "../../base/items-list/items-list.component";
import { ShipsStore } from "../ships.store";

@Component({
  selector: 'ships-list',
  standalone: true,
  imports: [ItemsListComponent],
  templateUrl: './ships-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipsListComponent {
  protected readonly store = inject(ShipsStore, { skipSelf: true });
}
