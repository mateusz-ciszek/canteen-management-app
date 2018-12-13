import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderBarComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
