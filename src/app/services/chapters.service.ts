import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Page } from '../models/page';
import { collection, getDocs, query, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {
  datasetChapters: Page[] = [];
  id: string = '';

  constructor(
    private firebaseService: FirebaseService
  ) { }

  setId(id: string): void {
    this.id = id;
  }

  // Método para destruir datasetChapters
  destroyDatasetChapters() : void {
    this.datasetChapters = [];
  }

  // Método para extraer los capítulos de un libro
  async setChaptersByBook(id_ebook: string):Promise<void> {
    const q = query(collection(
      this.firebaseService.db, "pages"), where("id_ebook", "==", id_ebook)
    );
    
    const querySnapshot = await getDocs(q);
        
    if (querySnapshot.empty) {
      console.log("No se encontraron capítulos para el libro con ID: " + id_ebook)
    }else {
      if (this.datasetChapters.length > 0) {
        this.destroyDatasetChapters();
      }

      querySnapshot.forEach((doc) => {
        this.setId(doc.id);
        var numberChapter = 1;
        doc.data()['content'].forEach((element: any) => {
          this.datasetChapters.push({
            // id_ebook: this.id, 
            title: element.title, 
            url: element.url
          });
          numberChapter++;
        });
      });
    }

    console.log(this.id);
  }

  // Método para obtener la información de los capítulos
  getDataChapters(): Page[] {
    return this.datasetChapters;
  }
}
