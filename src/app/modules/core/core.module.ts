import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { MemberService } from './services/member.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListComponent,
    DetailViewComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ListComponent,
    DetailViewComponent,
    HomeComponent,
  ],
  providers: [MemberService],
})
export class CoreModule {}
