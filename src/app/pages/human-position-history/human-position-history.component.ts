import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { PageEvent, MatSort } from '@angular/material';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';
import * as moment from 'moment';
import { MainService } from '@app/service/main.service';
import { Sort } from '@angular/material';

const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

@Component({
  selector: 'anms-human-position-history',
  templateUrl: './human-position-history.component.html',
  styleUrls: ['./human-position-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HumanPositionHistoryComponent implements OnInit {
  pageEvent: PageEvent;

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  reloadTable = false;
  showDateFrom;
  showDateTo;
  showDateTable;

  data;
  dataSource;
  objectKeys = Object.keys;
  panelOpenState = true;
  displayedColumns;

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  date: Date = new Date();

  settings = {
    bigBanner: true,
    timePicker: true,
    defaultOpen: false
  };
  className = 'cerf';
  length = 480;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex = 0;
  sortField;
  sortDirection;
  showSortArrow;
  sortCount;

  editButtonName = {};
  editRowObj = {};
  editTableColumns = [, "edit", "delete"];
  showCteateRow = null;
  createCount = 0;

  dataOptions = {
    start: this.pageIndex,
    length: this.pageSize,
    draw: 1,
    sortField: this.sortField,
    sortDirection: this.sortDirection
  };

  dateObject = moment('1395-11-22', 'YYYY,MM,DD');

  newDateFrom;
  newDateto;

  constructor(
    private mainService: MainService,
    private chRef: ChangeDetectorRef
  ) {
    this.getData();

    setTimeout(() => {
      this.chRef.detectChanges();
    }, 1000);
  }

  getData() {
    this.mainService.comtrackEvents(this.dataOptions).subscribe(data => {
      this.data = data;
      this.dataSource = this.data.data;
      this.displayedColumns = this.objectKeys(this.data.data[0]);
      this.displayedColumns.push("edit", "delete")
      console.log(this.dataSource, 'this.dataSource');

      this.chRef.detectChanges();
      setTimeout(() => {
        this.chRef.detectChanges();
      }, 1000);
    });
  }

  sortFilds(item) {
    this.sortCount++;
    this.showSortArrow = true;

    if (this.sortField !== item) {
      this.sortDirection = 'DESC';
      this.sortCount = 1;
    } else {
      if (this.sortDirection === 'DESC') {
        this.sortDirection = 'ASC';
      } else {
        this.sortDirection = 'DESC';
      }
      if (this.sortCount === 3) {
        this.sortDirection = null;
        this.sortCount = 0;
        this.chRef.detectChanges();
      }
    }

    console.log(this.sortCount, 'this.sortCount');

    this.sortField = item;

    this.dataOptions = {
      start: this.pageIndex,
      length: this.pageSize,
      draw: 1,
      sortField: this.sortField,
      sortDirection: this.sortDirection
    };

    this.getData();
  }

  getPaginatorData(event) {
    console.log(event);

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.dataOptions = {
      start: this.pageIndex,
      length: this.pageSize,
      draw: 1,
      sortField: this.sortField,
      sortDirection: this.sortDirection
    };

    this.getData();

    setTimeout(() => {
      this.chRef.detectChanges();
    }, 1000);

    this.editButtonName = {};
  }

  onDateFromSelect() {
    this.newDateFrom = moment(this.date).format('MM/DD/YYYY hh:mm');
    this.showDateFrom = false;
  }

  onDateToSelect() {
    this.newDateto = moment(this.date).format('MM/DD/YYYY hh:mm')
    this.showDateTo = false;
  }

  onDateTableSelect(event, i) {
    for (const k in this.dataSource[0]) {
      if (k === 'date') {
        this.editRowObj[k + i] = moment(this.date).toISOString()
      }
    }
    this.showDateTable = false;
  }

  createRow(flag) {
    if (flag === 'create') {
      if (this.createCount === 0) {
        this.reloadTable = true;

        let newArr = {};

        for (const key in this.dataSource[0]) {
          newArr[key] = null;
        }
        this.showCteateRow = 0;
        console.log(this.dataSource);
        this.dataSource.unshift(newArr)
        console.log(this.dataSource);

        setTimeout(() => {
          this.reloadTable = false;
          this.chRef.detectChanges();
        }, 10);
        this.createCount++
      }
    } else if (flag === 'cancel' && this.showCteateRow === 0) {
      this.reloadTable = true;
      this.createCount = 0;
      this.showCteateRow = null;

      this.dataSource.splice(0, 1)

      setTimeout(() => {
        this.reloadTable = false;
        this.chRef.detectChanges();
      }, 10);
    }
  }
  saveNew(i, element) {
    for (const k in this.dataSource[0]) {
      element[k] = this.editRowObj[k + i];
    }
    this.showCteateRow = null;
    this.createCount = 0;
    this.mainService.comtrackCreate(element).subscribe(data => {
      this.chRef.detectChanges();
      setTimeout(() => {
        this.chRef.detectChanges();
      }, 1000);
    });
    this.editRowObj = {};
  }
  edit(i, item, element, flag) {
    let name = i;
    this.editButtonName[name] = !this.editButtonName[name];

    if (flag) {
      for (const k in this.dataSource[0]) {
        this.editRowObj[k + i] = element[k];
        if (k === 'date') {
          let date = new Date(element[k]);
          this.editRowObj[k + i] = moment(date).toISOString()
        }
      }
    } else {
      for (const k in this.dataSource[0]) {
        element[k] = this.editRowObj[k + i];
        console.log(element[k]);
      }
      this.mainService.comtrackUpdate(element).subscribe(data => {
        this.chRef.detectChanges();
        setTimeout(() => {
          this.chRef.detectChanges();
        }, 1000);
      });
    }
    this.chRef.detectChanges();
  }
  delete(element) {
    console.log(element, 'element');

    this.mainService.comtrackDelete(element).subscribe(data => {
      this.chRef.detectChanges();
      setTimeout(() => {
        this.chRef.detectChanges();
      }, 1000);
    });
  }

  ngOnInit() { }
}
