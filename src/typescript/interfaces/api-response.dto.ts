/** StackTrace string or humanized error message  */
type ApiResponseError = string;

/**
 * Extandable interface of response meta data
 */
export interface ApiResponseMeta {
  totalCount: number;
  limit: number;
  offset: number;
}

/**
 * @typeParam D The type of the single data array item
 */
export interface ApiResponseDataDto<D = unknown> {
  data: D | null;
}

/**
 * @typeParam D The type of the single array item
 * @typeParam M The type of the meta data object
 */
export interface ApiResponseWithMetaDto<
  D = unknown,
  M extends ApiResponseMeta = ApiResponseMeta,
> extends ApiResponseDataDto<D> {
  meta: M | null;
}

/**
 * @typeParam D The type of the single array item
 * @typeParam E The type of the response error object
 */
export interface ApiResponseErroredDto<D = unknown, E = ApiResponseError>
  extends ApiResponseDataDto<D> {
  error: E | null;
}

/**
 * Combine all interfaces in one
 */
export type ApiResponseDto<
  D = unknown,
  M extends ApiResponseMeta = ApiResponseMeta,
  E = ApiResponseError,
> = ApiResponseDataDto<D> | ApiResponseWithMetaDto<D, M> | ApiResponseErroredDto<D, E>;
