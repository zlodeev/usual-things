import type {ApiResponseDto} from '@types';
import {delay, of, switchMap} from 'rxjs';

export interface ArrayItem {
  id: number;
  title: string | null;
}

const MOCK_DATA: ApiResponseDto<readonly ArrayItem[] | null> | null = {
  data: [],
  meta: {
    totalCount: 100,
    limit: 100,
    offset: 0,
  },
};

/**
 * Imitation of http GET request for some data array.
 * Can be random errored
 */
export function getSomeData() {
  return of(MOCK_DATA).pipe(
    delay(Math.random() * 1000),
    switchMap(res => {
      if (Math.random() > 0.95) {
        throw Error('HTTP 500 Error while downloading data');
      }

      if (Math.random() > 0.85) {
        return of({
          data: null,
          error: 'HTTP 200 OK But some error in request or data',
        });
      }

      return of(res);
    }),
  );
}
