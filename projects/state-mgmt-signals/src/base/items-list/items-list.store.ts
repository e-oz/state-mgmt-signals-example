import { computed, Injectable, Signal, signal } from "@angular/core";
import type { Item } from "../../types";

@Injectable()
export class ItemsListStore {
  public readonly $allItems = signal<Item[]>([]);

  public readonly $page = signal<number>(0);

  public readonly $pageSize = signal<number>(10);

  public readonly $items: Signal<Item[]> = computed(() => {
    const pageSize = this.$pageSize();
    const offset = this.$page() * pageSize;
    return this.$allItems().slice(offset, offset + pageSize);
  });

  public readonly $total: Signal<number> = computed(() => this.$allItems().length);

  public readonly $selectedItem = signal<Item | undefined>(undefined);
}
