import { computed, Injectable, Signal, signal } from "@angular/core";
import type { Item } from "../../types";
import { createEffect } from "../../create-effect";
import { tap } from "rxjs";

@Injectable()
export class ItemsListStore {
  public readonly $allItems = signal<Item[]>([]);

  public readonly $page = signal<number>(0);

  public readonly $pageSize = signal<number>(10);

  public readonly $items = computed<Item[]>(() => {
    const pageSize = this.$pageSize();
    const offset = this.$page() * pageSize;
    return this.$allItems().slice(offset, offset + pageSize);
  });

  public readonly $total = computed<number>(() => this.$allItems().length);

  public readonly $selectedItem = signal<Item | undefined>(undefined);

  public readonly setSelected = createEffect<{
    item: Item,
    selected: boolean
  }>(_ => _.pipe(
    tap(({ item, selected }) => {
      if (selected) {
        this.$selectedItem.set(item);
      } else {
        if (this.$selectedItem() === item) {
          this.$selectedItem.set(undefined);
        }
      }
    })
  ));
}
