import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CarRequest } from '../interfaces/interfaces';
import { StoreCarService } from '../store-car.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'carsforrent-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
})
export class CarsListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CarRequest>;
  private subs = new Subscription();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'carName',
    'brand',
    'carType',
    'fuleType',
    'transmission',
    'seats',
    'deliveryType',
    'price',
  ];
  public dataSource: MatTableDataSource<CarRequest>;
  private dataArray: any;
  constructor(private carsService: StoreCarService) {}
  ngOnInit() {
    this.subs.add(
      this.carsService.getAllCars().subscribe(
        (res) => {
          this.dataArray = res;
          this.dataSource = new MatTableDataSource<CarRequest>(this.dataArray);
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
