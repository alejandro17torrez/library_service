import { BearerTokenInterface } from "../definations/interfaces/auth";
import {
  BOOKS,
  BOOK_BY_ID,
} from "../definations/endpoints/books";
import fetcWithoutToken, { fetchWithToken } from "./fetch";
import { Methods } from "../definations/interfaces/fetch";

export const get = async () => {
  return await fetcWithoutToken({
      url: BOOKS,
      params: {},
      method: Methods.GET,
    });
};

export const getById = async ({
  id,
}: BearerTokenInterface) => {
  return await fetcWithoutToken({
      url: BOOK_BY_ID(id),
      params: {},
      method: Methods.GET,
    });
};

export const create = async({
  book,
  token,
}: BearerTokenInterface): Promise<number> => {
  const response: Response = await fetchWithToken({
    url: BOOKS,
    params: {},
    method: Methods.POST,
    data: book,
    bearerToken: token,
  });

  return response.status;
};

export const update = async({
  book,
  token,
}: BearerTokenInterface): Promise<number> => {
  const response: Response = await fetchWithToken({
    url: BOOK_BY_ID(book?.id),
    params: {},
    method: Methods.PUT,
    data: book,
    bearerToken: token,
  });

  return response.status;
};

export const destroy = async({
  book,
  token,
}: BearerTokenInterface): Promise<number> => {
  const response: Response = await fetchWithToken({
    url: BOOK_BY_ID(book?.id),
    params: {},
    method: Methods.DELETE,
    bearerToken: token,
  });

  return response.status;
};
