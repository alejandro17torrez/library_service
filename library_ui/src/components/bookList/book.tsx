import { Button } from "primereact/button";
import { Book } from "../../definations/interfaces/book";

export const book = (book: Book) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg`} height={120} width={150} alt={book.title} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{book.title}</div>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <span className="font-semibold">Author: {book.author}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-column ">
                            <span className="text-2xl font-semibold">Year: {book.publication_year}</span>
                        </div>
                        <Button icon="pi pi-book" className="p-button-rounded"></Button>  
                    </div>
                </div>
            </div>
        );
    };
