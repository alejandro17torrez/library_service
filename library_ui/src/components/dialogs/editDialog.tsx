import { Dialog } from "primereact/dialog"
import { EditForm } from "../../definations/interfaces/components";
import { BookForm } from "../bookForm";


export const EditDialog = ({
  hideDialog,
  dialog,
  book,
  save,
  onChangeText,
  onChangeNumber,
}: EditForm) => {
  return (
    <Dialog visible={dialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal onHide={hideDialog}>
      <BookForm book={book} onChangeNumber={onChangeNumber} onChangeText={onChangeText} save={save} />
    </Dialog>
  )
};
