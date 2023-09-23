import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { BookForm as IBookForm } from "../../definations/interfaces/components";
import { Button } from "primereact/button";


export const BookForm = ({ 
  book,
  onChangeText,
  onChangeNumber,
  save,
}: IBookForm) => {
  
  return (
    <div className="row card">  
      <div className="my-2 field">
        <label htmlFor="title" className="font-bold mx-4">
          Title
        </label>
        <InputText id="title" value={book.title} onChange={(e) => onChangeText(e, "title")} required autoFocus />
      </div> 
      <div className="my-2 field">
        <label htmlFor="author" className="font-bold mx-4">
          Author
        </label>
        <InputText id="author" value={book.author} onChange={(e) => onChangeText(e, "author")} required autoFocus />
      </div>
      <div className="my-2 field">
        <label htmlFor="year" className="font-bold mx-4">
          Year
        </label>
        <InputNumber id="days" value={book.publication_year} onChange={(e) => onChangeNumber(e, "publication_year")} required />
      </div>
      <div className="my-2 field">
        <Button onClick={() => save()}>Save</Button>
      </div>
    </div>
  )
};
