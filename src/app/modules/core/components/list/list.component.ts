import { Component, OnInit, ViewChild } from '@angular/core';
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
export class ListComponent implements OnInit {
  data: any;
  displayedColumns: string[];
  dataSource: MatTableDataSource<Member>;

  filteredValue: string;
  filteredCategories: string[];

  categories = new FormControl('');
  search = '';
  advancedSearch: boolean;
  loading: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private membersService: MemberService) {}

  ngOnInit() {
    this.membersService.getMembers().subscribe((data: Members) => {
      this.data = data.results[0].members;
      this.displayedColumns = this.retrieveColumnsNames(this.data[0]);
      this.dataSource = new MatTableDataSource(this.data);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.loading = false;
    });
  }

  toggleSearch() {
    this.advancedSearch = !this.advancedSearch;
  }

  categoryFilter(column: string) {
    this.search = '';

    this.dataSource.filterPredicate = (d: Member, filter: string) => {
      const textToSearch = (d[column] && d[column].toLowerCase()) || '';
      return textToSearch.indexOf(filter) !== -1;
    };
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  categoriesFilter(value) {
    this.filteredCategories = value;
    this.dataSource.filterPredicate = (data, filter) => {
      return data[value].indexOf(filter) !== -1;
    };
  }

  retrieveColumnsNames(data): string[] {
    const list = [];
    for (let key in data) {
      list.push(key);
    }

    return list;
  }
}
