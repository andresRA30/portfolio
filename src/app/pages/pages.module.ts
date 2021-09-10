import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent
  ],
  exports: [
    PortfolioComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
