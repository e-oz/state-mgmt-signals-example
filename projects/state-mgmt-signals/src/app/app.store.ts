import { computed, Injectable, signal } from "@angular/core";
import type { Item } from "../types";
import { getRandomItems } from "../rnd";
import { createEffect } from "../create-effect";
import { concatMap, exhaustMap, finalize, tap, timer } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppStore {
  private readonly state = {
    $planes: signal<Item[]>([]),
    $ships: signal<Item[]>([]),
    $loadingPlanes: signal<boolean>(false),
    $loadingShips: signal<boolean>(false),
  } as const;

  public readonly $planes = this.state.$planes.asReadonly();
  public readonly $ships = this.state.$ships.asReadonly();
  public readonly $loadingPlanes = this.state.$loadingPlanes.asReadonly();
  public readonly $loadingShips = this.state.$loadingShips.asReadonly();
  public readonly $loading = computed<boolean>(() => this.$loadingPlanes() || this.$loadingShips());

  constructor() {
    this.generateAll();
  }

  generateAll() {
    this.generateA();
    this.generateB();
  }

  private generateA = createEffect(_ => _.pipe(
    concatMap(() => {
      this.state.$loadingPlanes.set(true);
      return timer(3000).pipe(
        finalize(() => this.state.$loadingPlanes.set(false)),
        tap(() => this.state.$planes.set(getRandomItems()))
      )
    })
  ));

  private generateB = createEffect(_ => _.pipe(
    exhaustMap(() => {
      this.state.$loadingShips.set(true);
      return timer(3000).pipe(
        finalize(() => this.state.$loadingShips.set(false)),
        tap(() => this.state.$ships.set(getRandomItems()))
      )
    })
  ));
}
