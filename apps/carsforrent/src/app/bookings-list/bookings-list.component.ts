import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { BookingsService } from '../bookings.service';
import { BookingRequest } from '../interfaces/interfaces';
@Component({
  selector: 'carsforrent-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css'],
})
export class BookingsListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<BookingRequest>;
  private subs = new Subscription();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'email',
    'startDate',
    'endDate',
    'carName',
    'brand',
    'carType',
    'fuelType',
    'transmission',
    'seats',
    'deliveryType',
    'price',
  ];

  public dataSource: MatTableDataSource<BookingRequest>;
  private dataArray: any;

  constructor(private bookingsService: BookingsService) {}

  ngOnInit() {
    this.subs.add(
      this.bookingsService.getAll().subscribe(
        (res) => {
          this.dataArray = res;
          this.dataSource = new MatTableDataSource<BookingRequest>(
            this.dataArray
          );
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        (err: HttpErrorResponse) => {
          console.error(err);
        }
      )
    );
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
