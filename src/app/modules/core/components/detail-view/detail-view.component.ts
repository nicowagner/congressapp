import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { Member } from 'src/app/modules/shared/models/member.model';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

interface Members {
  results: [{ members: Member }];
}

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent implements OnInit {
  data: any;
  memberId: string;
  memberInfo: Member;
  loading: boolean = true;

  constructor(
    private membersService: MemberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.route.params,
      this.membersService.getMembers(),
    ]).subscribe((combined) => {
      const id = combined[0].id;
      const members: any = combined[1];

      this.memberInfo = members.results[0].members.find(
        (member) => member.id === id
      );

      this.loading = false;
    });
  }
}
