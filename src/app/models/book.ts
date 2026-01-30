import { Author } from "./author";
import { Images } from "./images";
import { Page } from "./page";

export interface EBook {
    _id: string,
    title: string,
    url: string,
    images: Images[],
    sinopsis: string,
    categories: string[],
    // active: boolean,
    authors: Author[],
    pages: Page[],
    // wallpapers: string[],
    rating: number,
    publisher: string,
    number_pages: number
}
