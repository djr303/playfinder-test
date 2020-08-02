import {Component, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './datePicker.component.html',
  styleUrls: ['./datePicker.component.scss']
})
export class DatePickerComponent implements AfterViewInit {
  @Input() public date: NgbDateStruct;
  @Output() public dateChange: EventEmitter<NgbDateStruct> = new EventEmitter<NgbDateStruct>();
  @ViewChild('d') public dateSelector : any 

  public ngAfterViewInit() {
    this.dateSelector.dateSelect.subscribe((date: NgbDateStruct) => { 
      this.date = date;
      this.dateChange.emit(this.date)
    })
  }

  public internalDate: NgbDateStruct;
  public updateDate(): void {
    this.date = this.internalDate
    this.dateChange.emit(this.date)
  }
}
