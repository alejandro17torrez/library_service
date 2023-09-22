import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { get, getById, update, destroy, create } from "../api/books";
import { Book } from "../definations/interfaces/book";

export const useBooks = () => {
  const { state } = useAuthContext();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    get().then((book) => setBooks(book.results));
  }, [loading]);

  const bookById = (book: Book) => {
    return getById({
      id: book.id,
    })
  }

  const createOrUpdate = (book: Book) => {
    setLoading(true);
    if (book.id) {
      return update({
        book: book,
        token: state.token.access,
      });
    } else {
      return create({
        book: book,
        token: state.token.access,
      })
    }
  };

  const softDelete = (book: Book) => {
    setLoading(true);
    return destroy({
      book: book,
      token: state.token.access,
    })
  };

  if(!books) {
    return;
  }

  return { books, bookById, createOrUpdate, softDelete };
}
