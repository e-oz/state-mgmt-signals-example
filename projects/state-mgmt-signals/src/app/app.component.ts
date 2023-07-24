import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MatTabsModule } from "@angular/material/tabs";
import { PlanesComponent } from "../planes/planes.component";
import { ShipsComponent } from "../ships/ships.component";
import { AppStore } from "./app.store";
import { MatIconModule } from "@angular/material/icon";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavbarComponent,
    MatTabsModule,
    PlanesComponent,
    ShipsComponent,
    MatIconModule,
    NgIf,
  ]
})
export class AppComponent {
  protected readonly store = inject(AppStore);
}
