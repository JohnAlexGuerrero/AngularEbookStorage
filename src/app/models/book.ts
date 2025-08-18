import { Author } from "./author";

export interface Book {
    id: string,
    title: string,
    title_origin: string,
    imageUrl: string,
    authors: Author[],
    // chapters: [{
    //     title: string, paragraphs: String[]
    // }],
    // portada: string,
    // cover: string,
    synopsis: string,
    saga: string,
    // pages: [],
}
