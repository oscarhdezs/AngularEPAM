import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {APP_STORAGE} from '../core/core.module';



@NgModule({
  declarations: [],
  providers: [{
    provide: APP_STORAGE,
    useValue: localStorage
  }],
  imports: [
    CommonModule
  ]
})
export class UserModuleModule {

  static forRoot() {

  }

}
