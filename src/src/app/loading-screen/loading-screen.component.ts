import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {LoadingScreenService} from '../service/loading-screen/loading-screen.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements  AfterViewInit, OnDestroy {
  loading: boolean;
  debounceTime: number;
  loadingSubscription: Subscription;
  constructor(private loadingScreenService: LoadingScreenService,
              private elmRef: ElementRef,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.loading = false;
    this.debounceTime = 400;
    this.elmRef.nativeElement.style.display = 'none';
    this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(debounceTime(this.debounceTime)).subscribe(
      (status: boolean) => {
        this.elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this.changeDetectorRef.detectChanges();
      }
    );
  }
   ngOnDestroy() {
      this.loadingSubscription.unsubscribe();
    }
}
