import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from "../../base/items-list/items-list.component";
import { ShipsStore } from "../ships.store";

@Component({
  selector: 'ships-list',
  standalone: true,
  imports: [CommonModule, ItemsListComponent],
  templateUrl: './ships-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShipsListComponent {
  protected readonly store = inject(ShipsStore, { skipSelf: true });
}
