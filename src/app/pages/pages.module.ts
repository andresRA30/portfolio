import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentModule } from '../components/component.module';
import { ReactiveFormsModule } from '@angular/forms';

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
    CommonModule,
    ComponentModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
