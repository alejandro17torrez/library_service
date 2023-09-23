import { InputNumberChangeEvent } from "primereact/inputnumber";
import { Book } from "./book";


export interface BookForm {
  book: Book;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  onChangeNumber: (e: InputNumberChangeEvent, name: string) => void;
  save: () => Promise<void>;
}

export interface DeleteForm {
  deleteDialogFooter: JSX.Element;
  hideDeleteDialog: () => void;
  deleteDialog: boolean;
  book: Book;
}
