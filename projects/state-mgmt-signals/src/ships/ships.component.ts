import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipsStore } from "./ships.store";
import { MatCardModule } from "@angular/material/card";
import { ShipsListComponent } from "./ships-list/ships-list.component";
import { ShipsPageIndicatorComponent } from "./ships-page-indicator/ships-page-indicator.component";
import { ShipsListProgressComponent } from "./ships-list-progress/ships-list-progress.component";

@Component({
  selector: 'app-ships',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    ShipsListComponent,
    ShipsPageIndicatorComponent,
    ShipsListProgressComponent,
  ],
  templateUrl: './ships.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ShipsStore,
  ]
})
export class ShipsComponent {
}
