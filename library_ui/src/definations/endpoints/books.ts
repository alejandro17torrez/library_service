import { BACKEND_URL } from "./fetch";

export const BOOKS = `${BACKEND_URL}/api/books/`;
export const BOOK_BY_ID = (id: string | undefined) => `${BACKEND_URL}/api/books/${id}`;
