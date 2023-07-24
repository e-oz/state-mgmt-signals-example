import { computed, Injectable, Signal, signal } from "@angular/core";

@Injectable()
export class ListProgressStore {
  public readonly $total = signal<number>(0);
  public readonly $page = signal<number>(0);
  public readonly $pageSize = signal<number>(10);
  public readonly $progress: Signal<number> = computed(() => {
    if (this.$pageSize() < 1 && this.$total() < 1) {
      return 0;
    }
    return 100 * (this.$page() / (this.$total() / this.$pageSize()));
  });

}