import { Component, ViewChild } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css',
})
export class ProyectoComponent {
  displayedColumns: string[] = ['nombre', 'departamento', 'ciudad'];
  dataSource: MatTableDataSource<Proyecto>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const proyectos = [
      {
        nombre: 'Proyecto 1',
        departamento: 'Bogota DC',
        ciudad: 'Bogota DC',
      },
      {
        nombre: 'Proyecto 2',
        departamento: 'Cundinamarca',
        ciudad: 'Mosquera',
      },
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(proyectos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
