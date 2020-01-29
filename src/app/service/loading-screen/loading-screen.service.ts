import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  private load =  false;
  loadingStatus: Subject<any> = new Subject();

  get loading(): boolean {
    return this.load;
  }

  set loading(value) {
    this.load = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }
}
