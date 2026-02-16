import { Injectable } from '@angular/core';
import { Threads } from '../models/threads';
import { threadsDataset } from '../data/threads_dataset.';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {
  dataThreads: any[] = threadsDataset;

  constructor() { }

  getDatasetThreads():Threads[] {
    return this.dataThreads;
  }
}
