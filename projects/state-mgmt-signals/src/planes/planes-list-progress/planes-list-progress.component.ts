import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ListProgressComponent } from "../../base/list-progress/list-progress.component";
import { PlanesStore } from "../planes.store";

@Component({
  selector: 'planes-list-progress',
  standalone: true,
  imports: [ListProgressComponent],
  templateUrl: './planes-list-progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanesListProgressComponent {
  protected readonly store = inject(PlanesStore, {skipSelf: true});
}
