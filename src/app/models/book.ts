import { Author } from "./author";
import { Page } from "./page";

export interface Book {
    _id: string,
    title: string,
    // slug: string,
    cover: string,
    sinopsis: string,
    categories: string[],
    // active: boolean,
    authors: Author,
    pages: Page[],
    // wallpapers: string[],
    rating: number,
    publication_date: string,
    number_pages: number
}
