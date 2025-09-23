import { Author } from "./author";

export interface Book {
    id: string,
    title: string,
    cover: string,
    authorName: string,
    authorImage: string,
    authorDescriptin:string,
    category: string,
    // chapters: [{
    //     title: string, paragraphs: String[]
    // }],
    // portada: string,
    // cover: string,
    synopsis: string,
    saga: string,
    dateOfadd: string,
    // pages: [],
}
