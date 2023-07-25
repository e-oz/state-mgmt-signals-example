import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from "../../types";
import { ItemsListStore } from "./items-list.store";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'items-list',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatPaginatorModule, MatIconModule],
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  providers: [
    ItemsListStore
  ]
})
export class ItemsListComponent {
  protected readonly store = inject(ItemsListStore);

  @Input({ required: true })
  set allItems(allItems: Item[]) {
    this.store.$allItems.set(allItems);
  }

  @Input() set page(page: number) {
    this.store.$page.set(page);
  }

  @Input() set pageSize(pageSize: number) {
    this.store.$pageSize.set(pageSize);
  }

  @Input() displayDescriptions: boolean = false;

  @Input() disabled: boolean = false;

  @Output() pagination = new EventEmitter<PageEvent>();

  protected setSelected(item: Item, selected: boolean) {
    this.store.setSelected({ item, selected });
  }
}
