import { useRef, useState } from "react";
import { BookForm } from "../components/bookForm";
import { Book } from "../definations/interfaces/book";
import { emptyBook } from "../definations/initialValues/books";
import { InputNumberChangeEvent } from "primereact/inputnumber";
import { Toast } from "primereact/toast";
import { useBooks } from "../hooks/useBooks";

export default function AddBook () {
  // @ts-ignore
  const { createOrUpdate } = useBooks();
  const [book, setBook] = useState<Book>(emptyBook);
  const toast = useRef<Toast>(null)
  
  const save = async () => {
    const status = await createOrUpdate(book);
    if (status === 201 || status === 200) {
      toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Saved!!', life: 3000 });
    } else {
      toast.current?.show({ severity: 'error', summary: 'Error', detail: `Error código ${status}`, life: 3000 });
    }
  };


  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const value = (e.target?.value) || '';
    const _book = { ...book };
    // @ts-ignore
    _book[`${name}`] = value;
    setBook(_book);
  };

  const onChangeNumber = (e: InputNumberChangeEvent, name: string) => {
    const value = e.value || 0;
    const _book = { ...book };
    // @ts-ignore
    _book[`${name}`] = value;
    setBook(_book);
  };


  return (
    <>
      <Toast ref={toast} />
      <BookForm book={book} onChangeNumber={onChangeNumber} onChangeText={onChangeText} save={save} />
    </>
  ); 
}
