import { EBook } from "./book"

export interface Threads {
    // _id: number,
    name: string,
    books: EBook[],
    is_active: boolean,
    created_at?: string
}