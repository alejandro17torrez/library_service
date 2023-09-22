import { DataView } from 'primereact/dataview';

import { useBooks } from "../../hooks/useBooks";
import { book } from './book';

export default function BookList () {
  // @ts-ignore
  const { books } = useBooks();
  return (
    <div className="card">
      <DataView value={books} itemTemplate={book} paginator rows={5} />
    </div>
  );
}
