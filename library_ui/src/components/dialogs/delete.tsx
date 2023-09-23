import { Dialog } from "primereact/dialog"
import { DeleteForm } from "../../definations/interfaces/components";


export const DeleteDialog = ({
  deleteDialogFooter,
  hideDeleteDialog,
  deleteDialog,
  book,
}: DeleteForm) => {
  return (
    <Dialog visible={deleteDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteDialogFooter} onHide={hideDeleteDialog}>
      <div className="confirmation-content">
          <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
          {book && (
              <span>
                  Are you sure you want to delete <b>{book.id} | {book.title}</b>?
              </span>
          )}
      </div>
    </Dialog>
  )
};
