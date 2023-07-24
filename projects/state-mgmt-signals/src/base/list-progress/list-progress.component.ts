import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { ListProgressStore } from "./list-progress.store";

@Component({
  selector: 'list-progress',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './list-progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ListProgressStore,
  ]
})
export class ListProgressComponent {
  protected readonly store = inject(ListProgressStore);

  @Input({ required: true })
  set total(total: number) {
    this.store.$total.set(total);
  }

  @Input() set page(page: number) {
    this.store.$page.set(page);
  }

  @Input() set pageSize(pageSize: number) {
    this.store.$pageSize.set(pageSize);
  }

  @Input() disabled: boolean = false;

}
