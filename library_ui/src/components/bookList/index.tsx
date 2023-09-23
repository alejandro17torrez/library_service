import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useBooks } from "../../hooks/useBooks";
import { Book } from '../../definations/interfaces/book';
import { emptyBook } from '../../definations/initialValues/books';
import { DeleteDialog } from '../dialogs/delete';

export default function BookList () {
  // @ts-ignore
  const { books, softDelete, createOrUpdate, setLoading } = useBooks();
  const [book, setBook] = useState<Book>(emptyBook);
  const [dialog, setDialog] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [deleteDialog, setDeleteDialog] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<Book[]>>(null);

  const openNew = () => {
    setBook(emptyBook);
    setSubmitted(false);
    setDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setDialog(false);
  };

  const hideDeleteDialog = () => {
    setDeleteDialog(false);
  };

  const confirmDelete = (book: Book) => {
    setBook(book);
    setDeleteDialog(true);
  };

  const deleteBook = async () => {
    setDeleteDialog(false);
    setLoading(true);
    const status = await softDelete(book);
    if(status === 204) {
      toast.current?.show({ severity: 'error', summary: 'Successful', detail: 'Deleted!!', life: 3000 });
    } else {
      toast.current?.show({ severity: 'error', summary: 'Error', detail: `Error código ${status}`, life: 3000 });
    }
    setLoading(false);
  };

  const deleteDialogFooter = (
     <React.Fragment>
         <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteDialog} />
         <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteBook} />
     </React.Fragment>
  );

   const imageBodyTemplate = (book: Book) => {
      return <img src={`/images/book_thumb.png`} alt={book.title} className="shadow-2 border-round" style={{ width: '64px' }} />;
    };

  const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Manage Books</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" placeholder="Search..." onInput={(e) => {const target = e.target as HTMLInputElement; setGlobalFilter(target.value);}}  />
            </span>
        </div>
    );

  const actionBodyTemplate = (book: Book) => {
     return (
      <React.Fragment>
        <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDelete(book)} />
        <Button className="mx-2" icon="pi pi-book" rounded outlined severity="info" onClick={() => location.href = `/books/${book.id}`} />
      </React.Fragment>
     );
  };


  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
          <DataTable ref={dt} value={books} dataKey="id"  paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} books" globalFilter={globalFilter} header={header}>
              <Column field="title" header="Code" sortable style={{ minWidth: '12rem' }}></Column>
              <Column field="author" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
              <Column field="publication_year" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
              <Column field="image" header="Image" body={imageBodyTemplate}></Column>
              <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
          </DataTable>
        </div>

        <DeleteDialog
          deleteDialogFooter={deleteDialogFooter}
          hideDeleteDialog={hideDeleteDialog}
          deleteDialog={deleteDialog}
          book={book}
        />
    </div>
  );
}
