import { Author } from "./author";
import { Page } from "./page";

export interface Book {
    id: string,
    titulo: string,
    slug: string,
    cover: string,
    sinopsis: string,
    saga: string,
    active: boolean,
    authors: Author,
    pages: Page[],
}
