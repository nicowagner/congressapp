import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from 'src/app/modules/shared/models/member.model';
import { MemberService } from '../../services/member.service';
interface Members {
  results: [{ members: Member }];
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  data: any;
  displayedColumns: string[];
  dataSource: MatTableDataSource<Member>;

  filteredValue: string;
  filteredCategories: string[];

  categories = new FormControl('');

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private membersService: MemberService) {}

  ngOnInit() {
    this.membersService.getMembers().subscribe((data: Members) => {
      this.data = data.results[0].members;
      console.log(this.data);
      this.displayedColumns = this.retrieveColumnsNames(this.data[0]);
      console.log(this.displayedColumns);
      this.dataSource = new MatTableDataSource(this.data);
      console.log(this.dataSource);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.categories.valueChanges.subscribe((input) => {
        console.log('hpolsjiajdij' + input);
      });
    });
  }

  categoriesFilter(value) {
    this.filteredCategories = value;
  }

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredValue = filterValue;

    console.log(this.filteredValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  retrieveColumnsNames(data): string[] {
    const list = [];
    for (let key in data) {
      list.push(key);
    }

    return list;
  }
}
