/**
 * Task: You have a page with data table only. Write a observable for array of data stream.
 *
 * - no filters
 * - no pagination
 * - no reloads
 * - one time download data, one time to show it
 *
 * Extra task: observables for loading state and errors.
 */

import type {Observable} from 'rxjs';
import {catchError, of} from 'rxjs';
import type {ArrayItem} from './_mocks';
import {getSomeData} from './_mocks';

/**
 *
 */
const request$: Observable<readonly ArrayItem[]> = getSomeData().pipe(
  catchError((error: unknown) => {
    return of({
      data: [],
      error,
    });
  }),
);

// export const data$ = request$.pipe(map(({data}) => data));
