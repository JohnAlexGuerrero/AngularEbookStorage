import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private firebaseService: FirebaseService 
  ) { }

  
  // Obtener los ebooks agregados recientemente
  async getEbooksRecent(): Promise<any[]>{
    const ebooks: any[] = [];
    const dateStart = new Date("2025-08-01");
    const dateEnd = new Date("2025-08-31");
    // Referencia a la colección
    const collectionRef = collection(this.firebaseService.db, "ebooks");

    const q = query(
      collectionRef,
      where('dateOfAdd', '>', dateStart),
      where('dateOfAdd', '<', dateEnd),
      orderBy('dateOfAdd', 'desc')
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      const ebook = {
        id: doc.id, 
        title: doc.data()['title'], 
        cover: doc.data()['cover'], 
        authorName: doc.data()['authorName'], 
        category: doc.data()['category'],
        dateOfAdd: doc.data()['dateOfAdd'], 
      };
      console.log(ebook);
      ebooks.push(ebook);
    })

    return ebooks;
  }
}
