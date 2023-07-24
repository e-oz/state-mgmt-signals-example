import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanesStore } from "../planes.store";
import { ItemsListComponent } from "../../base/items-list/items-list.component";

@Component({
  selector: 'planes-list',
  standalone: true,
  imports: [CommonModule, ItemsListComponent],
  templateUrl: './planes-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanesListComponent {
  protected readonly store = inject(PlanesStore, {skipSelf: true});
}
