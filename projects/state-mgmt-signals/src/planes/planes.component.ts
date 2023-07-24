import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PlanesListComponent } from "./planes-list/planes-list.component";
import { MatCardModule } from "@angular/material/card";
import { PlanesPageIndicatorComponent } from "./planes-page-indicator/planes-page-indicator.component";
import { PlanesListProgressComponent } from "./planes-list-progress/planes-list-progress.component";
import { PlanesStore } from "./planes.store";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [
    MatCardModule,
    PlanesListComponent,
    PlanesPageIndicatorComponent,
    PlanesListProgressComponent,
    MatSlideToggleModule,
    NgIf,
  ],
  templateUrl: './planes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PlanesStore
  ]
})
export class PlanesComponent {
  protected readonly store = inject(PlanesStore);

  protected displayDescriptions(display: boolean) {
    this.store.setDisplayDescriptions(display);
  }
}
