import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Book } from "../definations/interfaces/book";
import { getById } from "../api/books";


export default function BookDetails () {
  const [book, setBook] = useState<Book>();
  const { id } = useParams();

  useEffect(() => {
    getById({
      id: id,
    }).then((book) => setBook(book));
  }, [])


  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
        <h5 className="card-title">{book?.title}</h5>
        <p className="card-text">Author: {book?.author}</p>
        <p className="card-text">Publication Year: {book?.publication_year}</p>
      </div>
    </div>
  </div>
  );
}
