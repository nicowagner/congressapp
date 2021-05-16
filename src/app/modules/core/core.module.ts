import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListComponent,
    DetailViewComponent,
    HomeComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ListComponent,
    DetailViewComponent,
    HomeComponent,
  ],
})
export class CoreModule {}
