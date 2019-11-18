import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const  COMPONENTS = [];
const DIRECTIVES = [];
const PIPES = [];


@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
    CommonModule
  ]
})
export class SharedModule { }
