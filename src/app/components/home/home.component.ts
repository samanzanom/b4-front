import { Component, OnInit } from '@angular/core';
import { ExcelService } from '../../services/excel.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonDTO } from '../../models/person-dto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedFile: File | null = null;
  loadedData: PersonDTO[] = [];
  displayedColumns: string[] = ['name', 'rut', 'field1', 'field2']; // Ajusta esto según los campos de tu PersonDTO

  constructor(
    private excelService: ExcelService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.excelService.uploadExcel(this.selectedFile).subscribe({
        next: (response) => {
          this.snackBar.open('Archivo cargado exitosamente', 'Cerrar', { duration: 3000 });
          this.loadedData = response;
        },
        error: (error) => {
          this.snackBar.open('Error al cargar el archivo', 'Cerrar', { duration: 3000 });
        }
      });
    }
  }

  loadData(): void {
    this.excelService.getAllPersons().subscribe({
      next: (data) => {
        this.loadedData = data;
      },
      error: (error) => {
        this.snackBar.open('Error al obtener los datos', 'Cerrar', { duration: 3000 });
      }
    });
  }
}
