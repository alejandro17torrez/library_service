export enum CodeStatus {
  CREATED = 201,
  OK = 200,
  NOT_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}


export enum Headers {
  APPLICATION_JSON = 'application/json',
  BEARER = 'Bearer',
}


export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
};


export interface FetchWithoutToken {
  url: string;
  params: object;
  method: Methods;
  headers?: object;
  data?: object;
};


export interface FetchWithToken extends FetchWithoutToken {
  bearerToken?: string;
}
