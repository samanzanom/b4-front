import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { ExcelService } from '../../services/excel.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let excelServiceSpy: jasmine.SpyObj<ExcelService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ExcelService', ['getAllPersons', 'uploadExcel']);

    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        MatTableModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: ExcelService, useValue: spy }
      ]
    })
      .compileComponents();

    excelServiceSpy = TestBed.inject(ExcelService) as jasmine.SpyObj<ExcelService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    excelServiceSpy.getAllPersons.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
