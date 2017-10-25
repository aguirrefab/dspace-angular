import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SortOptions } from '../../core/cache/models/sort-options.model';
import { CommunityDataService } from '../../core/data/community-data.service';

import { RemoteData } from '../../core/data/remote-data';
import { Community } from '../../core/shared/community.model';

import { fadeInOut } from '../../shared/animations/fade';
import { PaginationComponentOptions } from '../../shared/pagination/pagination-component-options.model';

@Component({
  selector: 'ds-top-level-community-list',
  styleUrls: ['./top-level-community-list.component.scss'],
  templateUrl: './top-level-community-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut]
})
export class TopLevelCommunityListComponent {
  topLevelCommunities: Observable<RemoteData<Community[]>>;
  config: PaginationComponentOptions;
  sortConfig: SortOptions;

  constructor(private cds: CommunityDataService) {
    this.config = new PaginationComponentOptions();
    this.config.id = 'top-level-pagination';
    this.config.pageSize = 5;
    this.config.currentPage = 1;
    this.sortConfig = new SortOptions();

    this.updatePage({
      page: this.config.currentPage,
      pageSize: this.config.pageSize,
      sortField: this.sortConfig.field,
      direction: this.sortConfig.direction
    });
  }

  updatePage(data) {
    this.topLevelCommunities = this.cds.findAll({
      currentPage: data.page,
      elementsPerPage: data.pageSize,
      sort: { field: data.sortField, direction: data.sortDirection }
    });
  }
}
