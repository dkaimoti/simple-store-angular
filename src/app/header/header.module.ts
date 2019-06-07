import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@NgModule({
  declarations: [HeaderComponent, HeaderNavComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
