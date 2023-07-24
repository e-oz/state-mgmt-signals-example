import { isObservable, Observable, of, retry, Subject, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef, inject } from '@angular/core';

/**
 * This code is a copied `ComponentStore.effect()` method from NgRx and edited to:
 * 1) be a standalone function;
 * 2) use `takeUntilDestroyed()` with an injected `DestroyRef`;
 * 3) resubscribe on errors.
 *
 * Credits: NgRx Team
 * https://ngrx.io/
 * Source: https://github.com/ngrx/platform/blob/main/modules/component-store/src/component-store.ts#L382
 * Docs:
 * https://ngrx.io/guide/component-store/effect#effect-method
 */
export function createEffect<
  ProvidedType = void,
  OriginType extends | Observable<ProvidedType> | unknown = Observable<ProvidedType>,
  ObservableType = OriginType extends Observable<infer A> ? A : never,
  ReturnType = ProvidedType | ObservableType extends void
    ? (
      observableOrValue?: ObservableType | Observable<ObservableType>
    ) => Subscription
    : (
      observableOrValue: ObservableType | Observable<ObservableType>
    ) => Subscription
>(generator: (origin$: OriginType) => Observable<unknown>): ReturnType {

  const destroyRef = inject(DestroyRef);
  const origin$ = new Subject<ObservableType>();
  generator(origin$ as OriginType).pipe(
    retry(),
    takeUntilDestroyed(destroyRef)
  ).subscribe();

  return ((
    observableOrValue?: ObservableType | Observable<ObservableType>
  ): Subscription => {
    const observable$ = isObservable(observableOrValue)
      ? observableOrValue.pipe(retry())
      : of(observableOrValue);
    return observable$.pipe(takeUntilDestroyed(destroyRef)).subscribe((value) => {
      origin$.next(value as ObservableType);
    });
  }) as unknown as ReturnType;
}
