import { Author } from "./author";
import { BookStorage } from "./book_storage";

export interface EBook {
    id: number,
    sku:string,
    title: string,
    book_storage: BookStorage,
    thumbnail_url: string,
    sinopsis: string,
    categories: string[],
    authors: Author[],
    rating: string,
    publisher: string,
    number_pages: string,
    created_at: string
}
