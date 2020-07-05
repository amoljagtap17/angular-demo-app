import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  // Create dummy data
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'anup.kumar@test.com', 50000),
    new SalesPerson('John', 'Doe', 'john.doe@test.com', 40000),
    new SalesPerson('Claire', 'Murphy', 'claire.murphy@test.com', 90000),
    new SalesPerson('Max', 'Grider', 'max.grider@test.com', 60000),
  ];

  constructor() {}

  ngOnInit(): void {}
}
